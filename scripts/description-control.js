const BUTTON_ID = '[class="shopping-item"]';
const DESC_LOC = '[contains-desc="yes"]'

var $ = window.jQuery;

function descOn(element) { //adds a description and add to cart button for an element
    let width = window.innerWidth;
    console.log(width);
    if (width > 600) {
        let $div = $('<li></li>', 
            {'class': 'desc-container', 'product-name': element.lastElementChild.innerHTML});
        let $description = $(element).attr("desc");
        let $button = $('<button>Add To Cart</button>');
        $button.attr('id', 'add-cart-button');
        $button.attr('type', 'button');
        $button.attr('onclick', 'addToCart(this)');
        let $numInpt = $('<input></input>', {'type': 'number', 'value': '1', 'id': 'numField'});
        $div.append($description);
        $div.append($numInpt);
        $div.append($button);
        $(element.parentElement).after($div);
        $(element).attr('contains-desc', 'yes');
        element.style.borderColor = '#000000';
        element.style.borderWidth = '1px 1px 0px 1px';
        element.style.borderStyle = 'solid';
    }
}

function descOff(element) { //removes the description
    $(element.parentElement.nextElementSibling).remove();
    element.style.border = 'none';
    $(element).removeAttr('contains-desc');
}

function toggleDesc(element) { //turns on and off description
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