// CLASSES

// class for Roll like the instructions asked for
function Roll(type, price, glazing, packSize) {
    this.type = type;
    this.price = price;
    this.glazing = glazing;
    this.packSize = packSize;
    this.totalPrice = (price + glazing.adaption) * packSize.adaption;
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

// class for products
function Product(name, id, basePrice, altText) {
    this.name = name;
    this.id = id;
    this.basePrice = basePrice;
    this.altText = altText;
}



// CONSTANTS

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

// mapping pack sizes to adaptions
const sizeAdaptionDict = {
    "1": sizeOptions[0],
    "3": sizeOptions[1],
    "5": sizeOptions[2],
    "10": sizeOptions[3]
};

// product information list
const products = [
    new Product("Original cinnamon roll", "original", 2.49, "Original cinnamon roll in a plate"),
    new Product("Apple cinnamon roll", "apple", 3.49, "Apple cinnamon roll in a plate with fork"),
    new Product("Raisin cinnamon roll", "raisin", 2.99, "Raisin cinnamon roll propped up"),
    new Product("Walnut cinnamon roll", "walnut", 3.4, "Walnut cinnamon roll in plate beside plate of walnut and cinnamon"),
    new Product("Double-chocolate cinnamon roll", "double-chocolate", 3.99, "Double chocolate cinnamon roll on paper"),
    new Product("Strawberry cinnamon roll", "strawberry", 3.99, "Stawberries and cinnamon rolls on skewers")
];

// cart as a list of rolls
const cart = [];



// FUNCTIONS

// sets up the page upon load
function onPageLoad() {
    let productGrid = document.getElementsByClassName("product-grid")[0];
    for (p=0; p < products.length; p++) {
        let productDiv = document.createElement("div");
        productDiv.id = products[p].id;
        productDiv.className = "product";
        productDiv.appendChild(createImage(products[p]));
        productDiv.appendChild(createRollTitle(products[p]));
        productDiv.appendChild(createGlazingOption(products[p]));
        productDiv.appendChild(createPackSizeOption(products[p]));
        productDiv.appendChild(createPriceCartRow(products[p]));
        productGrid.appendChild(productDiv);
    }
}

// sets up the product images
function createImage(product) {
    let img = document.createElement("img");
    img.className = "product-image big-border";
    img.src = "assets/products/" + product.id + "-cinnamon-roll.jpg";
    img.alt = product.altText;
    return img;
}

// sets up the product titles
function createRollTitle(product) {
    let title = document.createElement("p");
    title.className = "heading2";
    title.innerHTML = products[p].name;
    return title;
}

// sets up the glazing option label and dropdowns for each product
function createGlazingOption(product) {
    let productInfoRow = document.createElement("div");
    productInfoRow.className = "product-info-row";
    // sets up glazing label
    let label = document.createElement("label");
    label.className = "label-text";
    label.innerHTML = "Glazing: ";
    // sets up glazing dropdown options
    let select = document.createElement("select");
    select.className = "glazing-options small-border";
    for (j=0; j < glazingOptions.length; j++) {
        let gOption = document.createElement("option");
        gOption.text = glazingOptions[j].name;
        gOption.value = glazingOptions[j].adaption;
        select.add(gOption);
        // changes price if user clicks on a different glazing option
        select.addEventListener("change", function() {adaptionChange(product);});
    }
    productInfoRow.appendChild(label);
    productInfoRow.appendChild(select);
    return productInfoRow;
}

// sets up the pack size label and radio options for each product
function createPackSizeOption(product) {
    let productInfoRow = document.createElement("div");
    productInfoRow.className = "product-info-row";
    // sets up pack size label
    let label = document.createElement("div");
    label.className = "label-text";
    label.innerHTML = "Pack size: ";
    // sets up pack size radio options
    let radioSelect = document.createElement("div");
    radioSelect.className = "pack-size-options";
    for (k=0; k < sizeOptions.length; k++) {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = product.id;
        input.value = sizeOptions[k].adaption;
        if (k == 0) input.checked = true;
        input.id = product.id + "-" + k;
        // changes price if user clicks on a different pack size option
        input.addEventListener("click", function() {adaptionChange(product);});
        let radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", input.id);
        radioLabel.innerHTML = sizeOptions[k].amount;
        radioSelect.appendChild(input);
        radioSelect.appendChild(radioLabel);
    }
    productInfoRow.appendChild(label);
    productInfoRow.appendChild(radioSelect);
    return productInfoRow;
}

// changes product price based on glazing or pack size change
function adaptionChange(product) {
    let p = document.getElementById(product.id);
    let selectedGlazing = p.getElementsByClassName("glazing-options")[0];
    let g = glazingOptions[selectedGlazing.selectedIndex];
    let packSizeAdaption = document.querySelector('input[name="'+product.id+'"]:checked').value;
    let price = (product.basePrice + g.adaption) * packSizeAdaption;
    // toFixed method from https://www.w3schools.com/jsref/jsref_tofixed.asp
    p.getElementsByClassName("heading2")[1].innerHTML = "$ " + price.toFixed(2);
}

// sets up the price and add to cart button for each product
function createPriceCartRow(product) {
    let productInfoRow = document.createElement("div");
    productInfoRow.className = "product-info-row";
    // sets up price
    let price = document.createElement("div");
    price.className = "heading2";
    price.innerHTML = "$ " + product.basePrice.toFixed(2); // dynamic price
    // sets up add to cart button
    let addCartButton = document.createElement("a");
    addCartButton.className = "add-to-cart-button bold highlight-hover small-border";
    addCartButton.innerHTML = "Add to Cart";
    // add roll to cart if add to cart is clicked
    addCartButton.addEventListener("click", function () {
        let p = document.getElementById(product.id);
        let selectedGlazing = p.getElementsByClassName("glazing-options")[0];
        let g = glazingOptions[selectedGlazing.selectedIndex];
        let packSizeAdaption = document.querySelector('input[name="'+product.id+'"]:checked').value;
        let ps = sizeAdaptionDict[packSizeAdaption];
        let roll = new Roll(product.name, product.basePrice, g, ps);
        addToCart(roll);
    });
    productInfoRow.appendChild(price);
    productInfoRow.appendChild(addCartButton);
    return productInfoRow;
}

// adds roll to cart by updating cart and showing cart pop-up
function addToCart(roll) {
    cart.push(roll);
    updateCartTotal();
    showCartPopUp(roll);
}

// update cart total (# of items and price)
function updateCartTotal() {
    // update cart total price
    let totalPrice = 0;
    for (i=0; i < cart.length; i++) {
        totalPrice += cart[i].totalPrice;
    }
    document.getElementById("cart-price").innerHTML = "Total: $ " + totalPrice.toFixed(2);
    // update cart item count
    if (cart.length == 1) document.getElementById("item-count").innerHTML = cart.length + " item";
    else document.getElementById("item-count").innerHTML = cart.length + " items";
}

// sets up cart pop-up to be based on dynamic numbers
function showCartPopUp(roll) {
    document.getElementById("pop-up-roll-name").innerHTML = roll.type;
    document.getElementById("pop-up-roll-glazing").innerHTML = roll.glazing.name + " glazing";
    document.getElementById("pop-up-roll-size").innerHTML = "Pack of " + roll.packSize.amount;
    document.getElementById("pop-up-roll-price").innerHTML = "Price: $" + roll.totalPrice.toFixed(2);
    document.getElementById("cart-popup").style.visibility = "visible";
    /* got setTimeout from https://developer.mozilla.org/en-US/docs/Web/API/setTimeout */
    setTimeout(function() {document.getElementById("cart-popup").style.visibility = "hidden";}, 3000);
}