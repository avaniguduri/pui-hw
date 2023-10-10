import React, { Component } from "react";
import "./index.css";
import ProductRoll from "../product/index.js";
import NavBar from "../navbar/index.js";

// class for products
function Product(name, id, basePrice, altText) {
    this.name = name;
    this.id = id;
    this.basePrice = basePrice;
    this.altText = altText;
}

// class for glazing types
function GlazingAdaption(name, adaption) {
    this.name = name;
    this.adaption = adaption;
}

// class for pack sizes
function SizeAdaption(amount, adaption) {
    this.amount = amount;
    this.adaption = adaption;
}

// array of products
const products = [
    new Product("Original cinnamon roll", "original", 2.49, "Original cinnamon roll in a plate"),
    new Product("Apple cinnamon roll", "apple", 3.49, "Apple cinnamon roll in a plate with fork"),
    new Product("Raisin cinnamon roll", "raisin", 2.99, "Raisin cinnamon roll propped up"),
    new Product("Walnut cinnamon roll", "walnut", 3.4, "Walnut cinnamon roll in plate beside plate of walnut and cinnamon"),
    new Product("Double-chocolate cinnamon roll", "double-chocolate", 3.99, "Double chocolate cinnamon roll on paper"),
    new Product("Strawberry cinnamon roll", "strawberry", 3.99, "Stawberries and cinnamon rolls on skewers")
];

// glazing options list
const glazingOptions = [
    new GlazingAdaption("Keep original", 0),
    new GlazingAdaption("Sugar milk", 0),
    new GlazingAdaption("Vanilla milk", 0.5),
    new GlazingAdaption("Double chocolate", 1.5)
];

// pack size options list
const sizeOptions = [
    new SizeAdaption(1, 1),
    new SizeAdaption(3, 3),
    new SizeAdaption(6, 5),
    new SizeAdaption(12, 10)
];

// class for cart that holds info of last added item, a function to add items, and cart # of items and price
function Cart(cartCount, cartTotal) {
    this.cartCount = cartCount;
    this.cartTotal = cartTotal;
    this.addedGlazing = glazingOptions[0];
    this.addedPackSize = sizeOptions[0];
    this.addedRoll = products[0];
    this.addedItemTotal = 0.00;
    this.addItem = function (roll, glazing, packSize) {
        let price = (glazing.adaption + roll.basePrice) * packSize.adaption;
        let newCart = new Cart(this.cartCount + 1, this.cartTotal + price);
        newCart.addedGlazing = glazing;
        newCart.addedPackSize = packSize;
        newCart.addedRoll = roll;
        newCart.addedItemTotal = price;
        return newCart;
    };
}

/* creating the homepage component */
/* Used this website to understand how to render
   https://legacy.reactjs.org/docs/react-component.html */

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {cart : new Cart(0, 0.00)};
        this.onCartAdd = this.onCartAdd.bind(this);
    }

    onCartAdd(cart) {
        this.setState({cart: cart});
    }

    render() {
        return (
            /* creates the header with the page menu as a navbar component */
            /* creates the product grid with instances of the product component */
            <>
                <div className="header">
                    <img id="logo" src="assets/logo/logo-01.svg" alt="Bun Bun Bake Shop logo"/>
                    <div className="header-right">
                        <NavBar cartInfo={this.state.cart}/>
                        <hr id="line"/>
                        <p className="heading1">Our hand-made cinnamon rolls</p>
                    </div>
                </div>
                <div className="product-grid">
                    <ProductRoll key={products[0].id} roll={products[0]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    <ProductRoll key={products[1].id} roll={products[1]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    <ProductRoll key={products[2].id} roll={products[2]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    <ProductRoll key={products[3].id} roll={products[3]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    <ProductRoll key={products[4].id} roll={products[4]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    <ProductRoll key={products[5].id} roll={products[5]} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                </div>
            </>
        );
    }
}

export default HomePage;