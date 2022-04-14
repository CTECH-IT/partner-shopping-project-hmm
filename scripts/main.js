window.addEventListener('resize', function () { //closes the desktop description that is open when changing to mobile
    if ($(window).width() < 600) {
        let loc = document.querySelector('[contains-desc="yes"]');
            if (loc != null) {
                descOff(loc);
            }
            descOn(element);
    }
});