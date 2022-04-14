var $ = window.jQuery;
const NUM_LOC = '#numField';
const NUM_OUT_LOC = '#ord-total';
var cartItems = {};
var itemPrices = {};

function addToCart(button) { //adds opened item to cart and closes panel
    let orderName = $(button.parentElement).attr('product-name');
    let orderNum = parseInt(document.querySelector(NUM_LOC).value);
    let productPrice = parseInt($(button.parentElement).attr('data-image-price'));
    let thing = document.querySelector('[contains-desc="yes"]');
    toggleDesc(thing);
    if (cartItems[orderName] != undefined) {
        cartItems[orderName] = cartItems[orderName] + orderNum;
    } else {
        cartItems[orderName] = orderNum;
    }
    itemPrices[orderName] = productPrice;
}

function changeOut(val) { //sets text field to price value
    let outField = document.querySelector(NUM_OUT_LOC);
    let $pricePer = parseInt($(outField).attr('price-per'));
    outField.innerHTML = '$' + ($pricePer * val);
}