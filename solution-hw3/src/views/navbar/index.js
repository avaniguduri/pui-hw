import React, { Component } from "react";
import "./index.css";

/* creating the navbar component */

class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <a id="product-nav" className="bold-hover highlight-hover">PRODUCTS</a>
                <a id="cart-nav">CART</a>
            </div>
        );
    }
}

export default NavBar;