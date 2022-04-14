const BUTTON_ID = '[class="shopping-item"]';
const DESC_LOC = '[contains-desc="yes"]';

var $ = window.jQuery;

function descOn(element) { //adds a description and add to cart button for an element
    let $div = $('<li></li>', 
        {'class': 'desc-container', 'product-name': element.lastElementChild.previousElementSibling.innerHTML, 'data-image-price': $(element).attr('data-image-price')});
    let $description = $(element).attr("desc");
    let $button = $('<button>Add To Cart</button>');
    $button.attr('id', 'add-cart-button');
    $button.attr('type', 'button');
    $button.attr('onclick', 'addToCart(this)');
    let priceLevel = $(element).attr('data-image-price');
    let $total = $('<p id="ord-total"></p>');
    $total.attr('price-per', priceLevel);
    $total.html('$' + priceLevel);
    let $numInpt = $('<input></input>', {'type': 'number', 'value': '1', 'id': 'numField', 'min': '1'});
    $div.append($description);
    $div.append($numInpt);
    $div.append($total);
    $div.append($button);
    $(element.parentElement).after($div);
    $(element).attr('contains-desc', 'yes');
    element.style.borderColor = '#000000';
    element.style.borderWidth = '1px 1px 0px 1px';
    element.style.borderStyle = 'solid';
    document.querySelector('#numField').addEventListener('change', function () { //listen for a change in the number field
        changeOut(this.value);
    });
}

function descOff(element) { //removes the description
    $(element.parentElement.nextElementSibling).remove();
    element.style.border = 'none';
    $(element).removeAttr('contains-desc');
}

function toggleDesc(element) { //turns on and off description
    if ($(window).width() > 600) {
        let $el = $(element);
        if($el.attr('contains-desc') == 'yes') {
            descOff(element);
        } else {
            let loc = document.querySelector(DESC_LOC);
            if (loc != null) {
                descOff(loc);
            }
            descOn(element);
        }
    }
}