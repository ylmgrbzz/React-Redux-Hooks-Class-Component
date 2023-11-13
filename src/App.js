import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./Nav";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const addToCart = (product) => {
    let newCart = [...cart];
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(product.productName + "   add to cart");
  };

  const removeFromCart = (product) => {
    let newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
    alertify.error(product.productName + "   removed from cart");
  };

  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };

  return (
    <div>
      <Container>
        <Nav cart={cart} removeFromCart={removeFromCart} />

        <Row>
          <Col xs="3">
            <CategoryList
              info={categoryInfo}
              changeCategory={changeCategory}
              currentCategory={currentCategory}
            />
          </Col>
          <Col xs="9">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <ProductList
                    {...props}
                    addToCart={addToCart}
                    info={productInfo}
                    product={products}
                  />
                )}
              />
              <Route
                exact
                path="/cart"
                render={(props) => (
                  <CartList
                    {...props}
                    removeFromCart={removeFromCart}
                    cart={cart}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
