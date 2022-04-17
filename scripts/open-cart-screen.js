var total;
const CART_DATA_LOC = 'ABCabc15739';

function displayOrder() {
    let theDataItself = {};
    remoteDataStore.get(CART_DATA_LOC, function (serverResponse) {
        console.log(serverResponse);
        theDataItself = serverResponse;
    });
    console.log(theDataItself);
    //cartItems = theDataItself['pdata'];
    //itemPrices = theDataItself['sdata'];
    remoteDataStore.remove(CART_DATA_LOC);
    let $orderCont = $('<div id="order-display-container"></div>');
    for (let i in cartItems) {
        let $itemDis = $('<div class="item-display"></div>');
        let $productName = $('<p class="prod-title"></p>');
        $productName.html(i);
        let $productPricePer = $('<p class="prod-price-per"></p>');
        $productPricePer.html(itemPrices[i]);
        let $productCount = $('<p class="prod-num"></p>');
        $productCount.html(cartItems[i]);
        let $productLineTotal = $('<p class="prod-tot-price"></p>');
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
    $('body').append($orderCont);
}

function openCartScreen() {
    //remoteDataStore.remove(CART_DATA_LOC, function () {});
    remoteDataStore.add({'emailAddress': CART_DATA_LOC, 'pdata': cartItems, 'sdata': itemPrices});
    window.open('checkout.html', '_self');
}

function openShopScreen() {
    //remoteDataStore.remove(CART_DATA_LOC, function () {});
    remoteDataStore.add({'emailAddress': CART_DATA_LOC, 'pdata': cartItems, 'sdata': itemPrices});
    window.open('index.html', '_self');
}