import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

const CartSummary = (props) => {
  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart {props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => props.removeFromCart(cartItem.product)}
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="warning">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem>
            <Link to="cart"> go Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return (
    <div>{props.cart.length > 0 ? renderSummary() : <div>Empty Cart</div>}</div>
  );
};

export default CartSummary;
