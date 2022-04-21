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

        updateItemCount(Object.values(cartItems).reduce(function(sumTotal, currentValue) {
            //reduce goes through every itme in the array and makes it the currentValue, then adds that to the sumTotal if another value is found.
            return sumTotal + currentValue
            //Adds the sum of all but the last value and the last value together to get total
        }, 0))
        
    } else {
        cartItems[orderName] = orderNum;

    updateItemCount(Object.values(cartItems).reduce(function(sumTotal, currentValue) {
            //reduce goes through every itme in the array and makes it the currentValue, then adds that to the sumTotal if another value is found.
            return sumTotal + currentValue
            //Adds the sum of all but the last value and the last value together to get total
        }, 0))
    }
    
    itemPrices[orderName] = productPrice;
}

function changeOut(val) { //sets text field to price value
    let outField = document.querySelector(NUM_OUT_LOC);
    let $pricePer = parseInt($(outField).attr('price-per'));
    outField.innerHTML = '$' + ($pricePer * val);
}

function addToCartMobile(orderName, orderNumIn, productPrice) {
    var orderNum = parseInt(orderNumIn)
    if (cartItems[orderName] != undefined) {
        cartItems[orderName] = cartItems[orderName] + orderNum;
    } else {
        cartItems[orderName] = orderNum;
    }
    itemPrices[orderName] = productPrice;
    resetCurrentItem()
}