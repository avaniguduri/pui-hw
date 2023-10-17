import React, { Component } from "react";
import "./index.css";
import ProductRoll from "../product/index.js";
import NavBar from "../navbar/index.js";
import CartView from "../view-cart/index.js";

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
    new Product("Walnut cinnamon roll", "walnut", 3.49, "Walnut cinnamon roll in plate beside plate of walnut and cinnamon"),
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

function deserializeCart() {
    let cartJSONString = localStorage.getItem("Cart");
    let finalCart = [];
    if (!cartJSONString) {
        return finalCart;
    }
    else {
        for (const [key, value] of Object.entries(JSON.parse(cartJSONString))) {
            value.total = function () {return ((value.roll.basePrice + value.glazing.adaption) * value.packSize.adaption).toFixed(2);};
            finalCart.push(value);
        }
        return finalCart;
    }
};

// class for cart that holds info of last added item, a function to add items, and cart # of items and price
function Cart(itms) {
    this.items = itms;
    this.addedItem = null; // include roll, glazing, pack size
    this.total = function () {
        return this.items.reduce((pv, item, index) => {
            return pv + ((item.roll.basePrice + item.glazing.adaption) * item.packSize.adaption);
        }, 0).toFixed(2);
    };

    this.addedItemTotal = function () {
        if (!this.addedItem) {
            return 0.0.toFixed(2);
        } else {
            let ai = this.addedItem;
            return ((ai.roll.basePrice + ai.glazing.adaption) * ai.packSize.adaption).toFixed(2);
        }
    };

    this.addItem = function (roll, glazing, packSize) {
        let newCart = new Cart([]);
        newCart.items = this.items;
        newCart.addedItem = {roll: roll, glazing: glazing, packSize: packSize, total: function () {return ((roll.basePrice + glazing.adaption) * packSize.adaption).toFixed(2);}};
        newCart.items.push(newCart.addedItem);
        this.serializeCart();
        return newCart;
    };

    this.removeItem = function (index) {
        let newCart = new Cart([]);
        newCart.items = [...this.items];
        newCart.items.splice(index, 1);
        this.serializeCart();
        return newCart;
    };

    this.serializeCart = function () {
        let cartJSON = {};
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i]
            cartJSON[i.toString()] = {"roll": item.roll, "glazing": item.glazing, "packSize": item.packSize};
        }
        localStorage.setItem("Cart", JSON.stringify(cartJSON));
        console.log(cartJSON);
    };
}

/* creating the homepage component */
/* Used this website to understand how to render
   https://legacy.reactjs.org/docs/react-component.html */

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {cart : new Cart(deserializeCart()), viewCart : false, productList : products, search : "", sortBy : "name"};
        this.onCartAdd = this.onCartAdd.bind(this);
        this.onCartRemove = this.onCartRemove.bind(this);
        this.toggleCartView = this.toggleCartView.bind(this);
        this.updateProductList = this.updateProductList.bind(this);
        this.updateSortBy = this.updateSortBy.bind(this);
    }

    onCartAdd(cart) {
        this.setState((ps) => {return {...ps, cart : cart}});
    }

    onCartRemove(index) {
        this.setState((ps) => {return {...ps, cart : this.state.cart.removeItem(index)}});
    }

    toggleCartView() {
        this.setState((ps) => {return {...ps, viewCart : !this.state.viewCart}});
    }

    filterProducts(ss, sb) {
        let newProductList;
        if (!ss || ss.trim() === "") {
            if (sb === "name") {
                newProductList = products.sort( (p1, p2) => p1.name.localeCompare(p2.name));
            } else {
                newProductList = products.sort( (p1, p2) => p1.basePrice - p2.basePrice);
            }
        } else {
            newProductList = products.filter( (p) => p.name.toLowerCase().includes(ss.toLowerCase()) );
            if (sb === "name") {
                newProductList = newProductList.sort( (p1, p2) => p1.name.localeCompare(p2.name));
            } else {
                newProductList = newProductList.sort( (p1, p2) => p1.basePrice - p2.basePrice);
            }
        }
        return newProductList;
    }

    updateProductList() {
        let searchString = document.getElementById("search-input").value;
        this.setState((ps) => {return {...ps, search : searchString, productList : this.filterProducts(searchString, this.state.sortBy)}});
    }

    updateSortBy() {
        let sb = document.getElementById("search-sort").value;
        this.setState((ps) => {return {...ps, productList : this.filterProducts(this.state.search, sb), sortBy : sb}});
    }

    render() {
        return (
            /* creates the header with the page menu as a navbar component */
            /* creates the product grid with instances of the product component */
            <>
                <div className="header">
                    <img id="logo" src="assets/logo/logo-01.svg" alt="Bun Bun Bake Shop logo"/>
                    <div className="header-right">
                        <NavBar cartInfo={this.state.cart} cartVisible={this.state.viewCart} toggleCartView={this.toggleCartView}/>
                        <hr id="line"/>
                        <p className="heading1">Our hand-made cinnamon rolls</p>
                    </div>
                </div>
                <div> {this.state.viewCart && <CartView cart={this.state.cart} onCartRemove={this.onCartRemove}/>}</div>
                <div className="search-sort-div">
                    <input type="text" id="search-input"></input>
                    <button onClick={this.updateProductList}>Search</button>
                    <label className="label-text" id="sort-by">sort by: </label>
                    <select name='searchSort' className="item-choice small-border" id="search-sort" onChange={this.updateSortBy}> 
                        <option value="name">Name</option>
                        <option value="base">Base Price</option>
                    </select>
                </div>
                {(this.state.productList.length === 0) &&
                    <p className="heading1 center">No Match!</p>
                }
                <div className="product-grid">
                    {this.state.productList.map( (p) => {
                        return <ProductRoll key={p.id} roll={p} glazings={glazingOptions} packSize={sizeOptions} cartInfo={this.state.cart} onCartAdd={this.onCartAdd}/>
                    })}
                </div>
            </>
        );
    }
}

export default HomePage;