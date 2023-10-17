import React, { Component } from "react";
import "./index.css";

/* creating the cart view component */
/* add conditional styling for empty cart */

class ItemInCart extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="item">
                <img className="cart-product-image" src={"assets/products/"+this.props.item.roll.id+"-cinnamon-roll.jpg"}/>
                <p className="cart-item-label">{this.props.item.roll.name}</p>
                <p className="cart-item-label">Glazing: {this.props.item.glazing.name}</p>
                <p className="cart-item-label">Pack Size: {this.props.item.packSize.amount}</p>
                <p className="cart-item-label bold">${this.props.item.total()}</p>
                <div className="remove-button">
                    <a className="cart-item-label underline" onClick={ () => this.props.onCartRemove(this.props.index) }>Remove</a>
                </div>
            </div>
        );
    }
}

export default ItemInCart;






