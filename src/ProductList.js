import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map(product => (
              <tr key={product.id}>
                <th scope="row"> {product.id} </th>
                <td> {product.productName} </td>
                <td> {product.quantityPerUnit} </td>
                <td> {product.unitPrice} </td>
                <td> {product.unitsInStock} </td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="primary"
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
