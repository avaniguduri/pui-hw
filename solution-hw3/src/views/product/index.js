import React, { Component } from "react";
import "./index.css";
import Product from "../home/index.js";

// creating the product roll component

/* Used this website to understand how to pass in props and render
   https://legacy.reactjs.org/docs/react-component.html */

class ProductRoll extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        // creates the glazing selection options as an array with a loop
        /* Used this to figure out how to put select dropdown into html:
           https://www.w3schools.com/tags/tag_select.asp */
        let allGlazings = [];
        this.props.glazings.forEach((gl) => {allGlazings.push(<option value={gl.value}>{gl.name}</option>)});

        // creates the pack size radio options as an array with a loop
        /* Used this to figure out how to put radio buttons into html:
           https://www.w3schools.com/tags/att_input_type_radio.asp */
        let allSizes = [];
        this.props.packSize.forEach((ps, index) => {
            let isChecked = index === 0; // pack size 1 starts off selected for each product
            let id = `${this.props.roll.id}-${index}`;
            // populate pack size array with inputs for radio options
            allSizes.push(<input type="radio" name={this.props.roll.id} value={ps.adaption} id={id} defaultChecked={isChecked}/>);
            // populate pack size array with labels for radio options
            allSizes.push(<label htmlFor={id}>{ps.amount}</label>)
        });

        return (
            // creates the product div with all the elements: image, title, glazing and pack size rows, price, add to cart button, etc 
            <div className="product">
                <img className="product-image big-border" src={"/assets/products/"+this.props.roll.id+"-cinnamon-roll.jpg"}/>
                <p className="heading2">{this.props.roll.name}</p>

                <div className="product-info-row">
                <label className="label-text">Glazing: </label>
                <select className="glazing-options small-border">
                    {allGlazings}
                </select>
                </div>

                <div className="product-info-row">
                    <div className="label-text">Pack size: </div>
                    <div className="pack-size-options">
                        {allSizes}
                    </div>
                </div>

                <div className="product-info-row">
                <div className="heading2">$ {this.props.roll.basePrice.toFixed(2)}</div>
                <a className="add-to-cart-button bold highlight-hover small-border">Add to Cart</a>
                </div>
        </div>

        );
    }
}

export default ProductRoll;