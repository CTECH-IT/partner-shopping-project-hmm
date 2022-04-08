const DETAIL_IMAGE_SELECTOR = '[data-image-role = "target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role = "title"]';
const DETAIL_DESC_SELECTOR = '[data-image-role = "description"]';
const DETAIL_TEMP_TEXT_SELECTOR = '[data-image-role = "temp-text"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role = "frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role = "trigger"]';
const HIDDEN_DETAIL_CLASS = "invisible";

function setDetails(imageUrl, titleText, descText) {
    "use strict";
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute("src", imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    let detailDescription = document.querySelector(DETAIL_DESC_SELECTOR);
    detailDescription.textContent = descText;
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
    return thumbnail.getAttribute("data-image-description");
}

function setDetailsFromThumb(thumbnail) {
    "use strict";
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail), descFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    "use strict";
    thumb.addEventListener("click", function(event) {
        event.preventDefault;
        setDetailsFromThumb(thumb);
        showDetails(); 
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

function initializeEvents() {
    "use strict";
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();