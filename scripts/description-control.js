const BUTTON_ID = '[class="shopping-item"]';
const DESC_LOC = '[class="desc-container"]'

var $ = window.jQuery;

function descOn(element) { //adds a description and add to cart button for an element
    let $div = $('<li></li>', 
        {'class': 'desc-container'});
    let $description = $(element).attr("desc");
    let $button = $('<button>Add To Cart</button>', {'id': 'add-cart-button', 'type': 'button', 'onclick': 'addToCart()'});
    $div.append($description);
    $div.append($button);
    $(element.parentElement).after($div);
    $(element).attr('contains-desc', 'yes');
    element.style.borderColor = '#000000';
    element.style.borderWidth = '3px';
}

function descOff(element) { //removes the description
    $(element.parentElement.nextElementSibling).remove();
    element.style.border = 'none';
    $(element).removeAttr('contains-desc');
}

function toggleDesc(element) { //turns on and off descriptions
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