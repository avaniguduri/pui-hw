import React, { Component } from "react";
import "./index.css";
import ItemInCart from "../item-in-cart/index.js";

/* creating the cart view component */
/* add conditional styling for empty cart */

class CartView extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        let cartHeader;
        if (this.props.cart.items.length == 0) {
            cartHeader = <p className="heading3" id="empty-cart-label">The cart is empty!</p>
        } else {
            cartHeader = <div className="view-cart-header">
                <p className="heading3" id="shopping-cart">Shopping Cart ({this.props.cart.items.length} item(s))</p>
                <p className="heading3" id="view-cart-total">Total: ${this.props.cart.total()}</p>
            </div>
        }
        return (
            <>
            <hr className="cart-line"/>
                {cartHeader}
            <div className="cart-items-grid">
                {this.props.cart.items.map( (item, index) => {
                    return <ItemInCart item={item} cart={this.props.cart} onCartRemove={this.props.onCartRemove} index={index}/>;
                } )}
            </div>
            <hr className="cart-line"/>
            </>
        );
    }
}

export default CartView;






