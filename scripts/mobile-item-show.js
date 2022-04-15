const DETAIL_IMAGE_SELECTOR = '[data-image-role = "target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role = "title"]';
const DETAIL_DESC_SELECTOR = '[data-image-role = "description"]';
const DETAIL_PRICE_SELECTOR = '[data-image-role = "price"]';
const DETAIL_TEMP_TEXT_SELECTOR = '[data-image-role = "temp-text"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role = "frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role = "trigger"]';
const HIDDEN_DETAIL_CLASS = "invisible";
var previousItem = "none";
var sameItem = false;

function setDetails(imageUrl, titleText, descText, priceText) {
    "use strict";

        if (checkForRemoval(titleText) == false) {

            let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
            detailImage.setAttribute("src", imageUrl);

            let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
            detailTitle.textContent = titleText;

            let detailDescription = document.querySelector(DETAIL_DESC_SELECTOR);
            detailDescription.textContent = descText;

            let detailPrice = document.querySelector(DETAIL_PRICE_SELECTOR);
            detailPrice.textContent = priceText;

            previousItem = titleText;

        } else {
        }
}

function checkForRemoval(title) {
    if (previousItem == title) {
        sameItem = true;
        previousItem = "none"
        return true;

    } else {
        sameItem = false;
        return false;

    }
}


function imageFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-title");
}

function descFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("desc");
}

function priceFromThumb(thumbnail) {
    "use strict";
    let number = parseInt(thumbnail.getAttribute("data-image-price"));
    let newnumber = (Math.round(number * 100) / 100).toFixed(2)
    return newnumber
}

function setDetailsFromThumb(thumbnail) {
    "use strict";
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail), descFromThumb(thumbnail), priceFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    "use strict";
    thumb.addEventListener("click", function(event) {
        event.preventDefault;
        setDetailsFromThumb(thumb);
        showOrHideDetails();
    })
}

function getThumbnailsArray() {
    "use strict";
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails); //convert Nodelist into array because arrays are cooler B)
    return thumbnailArray
}

function showDetails() {
    "use strict";
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    let temptext = document.querySelector(DETAIL_TEMP_TEXT_SELECTOR);
    frame.classList.remove(HIDDEN_DETAIL_CLASS);
    temptext.classList.add(HIDDEN_DETAIL_CLASS);
}

function hideDetails() {
    "use strict";
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    let temptext = document.querySelector(DETAIL_TEMP_TEXT_SELECTOR);
    frame.classList.add(HIDDEN_DETAIL_CLASS);
    temptext.classList.remove(HIDDEN_DETAIL_CLASS);
}

function showOrHideDetails() {
    if (sameItem == true) {
        hideDetails();
    } else {
        showDetails();
    }
}

function initializeEvents() {
    "use strict";
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();