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

/* creating the homepage component */
/* Used this website to understand how to render
   https://legacy.reactjs.org/docs/react-component.html */

class HomePage extends Component {

    render() {
        return (
            /* creates the header with the page menu as a navbar component */
            /* creates the product grid with instances of the product component */
            /* prdouct component has three props: 1. roll 2. glazings 3. packSize */
            <>
                <div className="header">
                    <img id="logo" src="assets/logo/logo-01.svg" alt="Bun Bun Bake Shop logo"/>
                    <div className="header-right">
                    <NavBar/>
                    <hr id="line"/>
                    <h>Our hand-made cinnamon rolls</h>
                    </div>
                </div>
                <div className="product-grid">
                    <ProductRoll roll={products[0]} glazings={glazingOptions} packSize={sizeOptions}/>
                    <ProductRoll roll={products[1]} glazings={glazingOptions} packSize={sizeOptions}/>
                    <ProductRoll roll={products[2]} glazings={glazingOptions} packSize={sizeOptions}/>
                    <ProductRoll roll={products[3]} glazings={glazingOptions} packSize={sizeOptions}/>
                    <ProductRoll roll={products[4]} glazings={glazingOptions} packSize={sizeOptions}/>
                    <ProductRoll roll={products[5]} glazings={glazingOptions} packSize={sizeOptions}/>
                </div>
            </>
        );
    }
}

export default HomePage;