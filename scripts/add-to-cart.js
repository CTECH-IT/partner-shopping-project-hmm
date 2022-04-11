var $ = window.jQuery;
const NUM_LOC = '[id="numField"]';
var cartItems = {};

function addToCart(button) { //adds opened item to cart and closes panel
    let orderName = $(button.parentElement).attr('product-name');
    let orderNum = parseInt(document.querySelector(NUM_LOC).value);
    let thing = document.querySelector('[contains-desc="yes"]');
    toggleDesc(thing);
    if (cartItems[orderName] != undefined) {
        cartItems[orderName] = cartItems[orderName] + orderNum;
    } else {
        cartItems[orderName] = orderNum;
    }
}