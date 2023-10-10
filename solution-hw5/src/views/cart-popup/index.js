import React, { Component } from "react";
import "./index.css";

/* creating the navbar component */

class CartPopup extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div id="cart-popup">
              <p className="pop-up-header">Added to cart: </p>
              <p className="pop-up-text bold" id="pop-up-roll-name">{this.props.cartInfo.addedRoll.name}</p>
              <p className="pop-up-text" id="pop-up-roll-glazing">{this.props.cartInfo.addedGlazing.name} glazing</p>
              <p className="pop-up-text" id="pop-up-roll-size">Pack of {this.props.cartInfo.addedPackSize.amount}</p>
              <p className="pop-up-text" id="pop-up-roll-price">Price: ${this.props.cartInfo.addedItemTotal.toFixed(2)}</p>
            </div>
        );
    }
}

export default CartPopup;






