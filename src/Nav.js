import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import CartSummary from "./CartSummary";

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CartSummary
              cart={props.cart}
              removeFromCart={props.removeFromCart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Cart;
