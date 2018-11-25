$(function () {
    //Max height assumed for mobile devices
    var navHeight = 162;

    $('#nav-placeholder').load('nav.html', function () {
        navHeight = $('nav').outerHeight(true);
    });

    $('#footer-placeholder').load('footer.html');

    function scrollToSection(section) {
        $('html, body').animate({
            scrollTop: $(section).offset().top - navHeight
        }, 200);
    }

    if (window.location.hash != '' && window.location.hash != 'undefined') {
        scrollToSection(window.location.hash);
    }

    $(window).on('hashchange', function () {
        scrollToSection(window.location.hash);
    });
});