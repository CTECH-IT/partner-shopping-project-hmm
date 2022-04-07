const DETAIL_IMAGE_SELECTOR = '[data-image-role = "target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role = "title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role = "frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role = "trigger"]';
const HIDDEN_DETAIL_CLASS = "invisible";

function setDetails(imageUrl, titleText) {
    "use strict";
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute("src", imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    console.log(detailTitle)
    detailTitle.textContent = titleText;
}


function imageFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
    "use strict";
    return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
    "use strict";
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    "use strict";
    thumb.addEventListener("click", function(event) {
        event.preventDefault;
        setDetailsFromThumb(thumb);
        showDetails(); // show big image
    })
}

function getThumbnailsArray() {
    "use strict";
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails); //convert Nodelist into array because arrays are cooler B)
    return thumbnailArray
}

function hideDetails() {
    "use strict";
    document.body.classList.add(HIDDEN_DETAIL_CLASS);

}

function showDetails() {
    "use strict";
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function initializeEvents() {
    "use strict";
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();