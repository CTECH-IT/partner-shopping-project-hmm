function displayOrder() {
    let $orderCont = $('<div id="order-display-container"></div>');
    let total;
    for (let i in cartItems) {
        let $itemDis = $('<div class="item-display"></div>');
        let $productName = $('<p class="prod-title"></p>');
        $productName.html(i);
        let $productPricePer = $('<p class="prod-price-per"></p>');
        $productPricePer.html(itemPrices[i]);
        let $productCount = $('<p class="prod-num"></p>');
        $productCount.html(cartItems[i]);
        let $productLineTotal = $('<p class="prod-tot-price"></p>');
        $productLineTotal.html(itemPrices[i] * cartItems[i]);
        $itemDis.append($productName);
        $itemDis.append($productPricePer);
        $itemDis.append($productCount);
        $itemDis.append($productLineTotal);
        $orderCont.append($itemDis);
    }
    $('body').append($orderCont);
}

function openCartScreen() {
    var w = window.open('checkout.html', '_self');
    w.addEventListener('load', console.log('hi'), true);
}