import React, { Component } from "react";
import "./index.css";

// creating the product roll component

/* Used this website to understand how to pass in props and render
   https://legacy.reactjs.org/docs/react-component.html */

function showCartPopup() {
    document.getElementById('cart-popup').style.visibility = 'visible';
    setTimeout(function () {
      document.getElementById("cart-popup").style.visibility = "hidden";
    }, 3000);
}

class ProductRoll extends Component {
    constructor(props) {
        super(props);
        // used https://www.geeksforgeeks.org/reactjs-setstate/
        this.state = {glazing: this.props.glazings[0], packSize: this.props.packSize[0]};
        this.glazingChange = this.glazingChange.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    glazingChange(e) {
        this.setState({glazing : this.props.glazings[parseInt(e.target.value)], packSize : this.state.packSize});
    }

    sizeChange(e) {
        this.setState({glazing : this.state.glazing, packSize : this.props.packSize[parseInt(e.target.value)]});
    }

    totalPrice() {
        return ((this.props.roll.basePrice + this.state.glazing.adaption) * this.state.packSize.adaption).toFixed(2);
    }

    addToCart() {
        this.props.onCartAdd(this.props.cartInfo.addItem(this.props.roll, this.state.glazing, this.state.packSize));
        showCartPopup();
    }

    render() {

        // creates the glazing selection options as an array with a loop
        /* Used this to figure out how to put select dropdown into html:
           https://www.w3schools.com/tags/tag_select.asp */
        let allGlazings = [];
        this.props.glazings.forEach((gl, index) => {allGlazings.push(<option value={index}>{gl.name}</option>)});

        const radioSelected = {backgroundColor: 'gray'};
        const radioUnselected = {};

        // creates the pack size radio options as an array with a loop
        /* Used this to figure out how to put radio buttons into html:
           https://www.w3schools.com/tags/att_input_type_radio.asp */
        let allSizes = [];
        this.props.packSize.forEach((ps, index) => {
            let isChecked = ps.amount === this.state.packSize.amount; // pack size 1 starts off selected for each product
            let id = `${this.props.roll.id}-${index}`;
            // populate pack size array with inputs for radio options
            allSizes.push(<input type="radio" name={this.props.roll.id}
                                 value={index} id={id} onChange={this.sizeChange}/>);
            // populate pack size array with labels for radio options
            allSizes.push(<label htmlFor={id} style={isChecked ? radioSelected : radioUnselected}>{ps.amount}</label>)
        });

        return (
            // creates the product div with all the elements: image, title, glazing and pack size rows, price, add to cart button, etc 
            <div className="product">
                <img className="product-image big-border" src={"assets/products/"+this.props.roll.id+"-cinnamon-roll.jpg"}/>
                <p className="heading2">{this.props.roll.name}</p>

                <div className="product-info-row">
                <label className="label-text">Glazing: </label>
                <select className="glazing-options small-border" onChange={this.glazingChange}> {/* interactivity of glazing select*/}
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
                <div className="heading2">$ {this.totalPrice()}</div>
                <a className="add-to-cart-button bold highlight-hover small-border" onClick={this.addToCart}>Add to Cart</a> {/* interactivity of packSize radio*/}
                </div>
        </div>

        );
    }
}

export default ProductRoll;