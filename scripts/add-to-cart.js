var $ = window.jQuery;

function addToCart(button) { //adds open item to cart
    console.log($(button.parentElement).attr('product-name'));
    let thing = document.querySelector('[contains-desc="yes"]');
    toggleDesc(thing);
}