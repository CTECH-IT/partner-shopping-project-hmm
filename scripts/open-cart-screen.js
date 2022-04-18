var total;
const CART_DATA_LOC = 'ABCabc15739';

function makeDivsOfOrder() {
    let $orderCont = $('<table id="order-display-container"></table>');
    let $headerRow = $('<tr class="item-display"></tr>');
    $headerRow.append($('<th class="prod-title">Item</th>'));
    $headerRow.append($('<th class="prod-price-per">Price Per</th>'));
    $headerRow.append($('<th class="prod-num">Number to Order</th>'));
    $headerRow.append($('<th class="prod-tot-price">Item Total</th>'));
    $orderCont.append($headerRow);
    for (let i in cartItems) {
        let $itemDis = $('<tr class="item-display"></tr>');
        let $productName = $('<td class="prod-title"></td>');
        $productName.html(i);
        let $productPricePer = $('<td class="prod-price-per"></td>');
        $productPricePer.html(itemPrices[i]);
        let $productCount = $('<td class="prod-num"></td>');
        $productCount.html(cartItems[i]);
        let $productLineTotal = $('<td class="prod-tot-price"></td>');
        let prlt = itemPrices[i] * cartItems[i];
        total += prlt;
        $productLineTotal.html(prlt);
        $itemDis.append($productName);
        console.log($productCount + $productLineTotal + $productName + $productPricePer);
        $itemDis.append($productPricePer);
        $itemDis.append($productCount);
        $itemDis.append($productLineTotal);
        $orderCont.append($itemDis);
    }
    $('#checkout-items-container').append($orderCont);
}

function displayOrder() {
    'use strict';
    let theDataItself = {};
    remoteDataStore.get(CART_DATA_LOC, function (resp) {
        theDataItself = resp;;
        cartItems = JSON.parse(theDataItself['pdata']);
        itemPrices = JSON.parse(theDataItself['sdata']);
        makeDivsOfOrder();
    });
}

function openCartScreen() {
    'use strict';

    // remoteDataStore.remove(CART_DATA_LOC, function () {});
    remoteDataStore.add({'emailAddress': CART_DATA_LOC, 'pdata': JSON.stringify(cartItems), 'sdata': JSON.stringify(itemPrices)});
    window.open('checkout.html', '_self');
}

function openShopScreen() {
    //remoteDataStore.remove(CART_DATA_LOC, function () {});
    remoteDataStore.add({'emailAddress': CART_DATA_LOC, 'pdata': cartItems, 'sdata': itemPrices});
    window.open('index.html', '_self');
}