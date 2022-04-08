const PLACE_SPOT = '[id="item-counter"]';
const PRODUCT_ID = '[class="shopping-item"]';

function changeCount() {
    let tempNumArr = [].slice.call(document.querySelectorAll(PRODUCT_ID));
    document.querySelector(PLACE_SPOT).innerHTML = 'Items: ' + tempNumArr.length;
}
changeCount();