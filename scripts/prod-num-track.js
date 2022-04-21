const PLACE_SPOT = '[id="item-counter"]';
const PRODUCT_ID = '[class="shopping-item"]';

function changeCount() {
    let tempNumArr = [].slice.call(document.querySelectorAll(PRODUCT_ID));
    document.querySelector(PLACE_SPOT).innerHTML = 'Items: ' + tempNumArr.length;
}
//changeCount();


//this is called whenever an item is added to the cart and on page load.
function updateItemCount(items) {
    document.querySelector(PLACE_SPOT).innerHTML = 'Items: ' + items
}