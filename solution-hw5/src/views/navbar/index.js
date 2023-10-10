import React, { Component } from "react";
import "./index.css";
import CartPopup from "../cart-popup/index.js";

/* creating the navbar component */

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <a id="product-nav" className="bold-hover highlight-hover">PRODUCTS</a>
                <div id="cart-info">
                    <a id="cart-nav">CART</a>
                    <CartPopup cartInfo={this.props.cartInfo}/>
                    <p className="cart-info" id="item-count">{this.props.cartInfo.cartCount} item(s)</p>
                    <p className="cart-info" id="cart-price">Total: ${this.props.cartInfo.cartTotal.toFixed(2)}</p>
                </div>
            </div>
        );
    }
}

export default NavBar;