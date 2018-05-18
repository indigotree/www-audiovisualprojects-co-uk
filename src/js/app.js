(function () {

    // Navigation Toggle
    //
    $('#navigation-toggle').on('click', function (event) {
        event.stopImmediatePropagation();
        $('body').toggleClass('navigation--open');
    });

    // Sticky Header
    //
    var sticky = document.getElementById('header').offsetTop
    window.onscroll = function () {
        document.body.classList[window.pageYOffset >= sticky ? 'add' : 'remove']('header--fixed')
    }

    // Carousel
    //
    $(function () {
        $('#carousel').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    // Navigation Side out
    //
    var panner = document.querySelector('.navigation-panner');
    new Hammer(panner).on('panleft tap', toggleNavigationClose).on('panright', toggleNavigationOpen);

    function toggleNavigationClose() {
        if (document.body.classList.contains('navigation--open')) {
            document.body.classList.remove('navigation--open');
        }
    }

    function toggleNavigationOpen() {
        document.body.classList.add('navigation--open');
    }
    
    // Fancybox 
    //
    $.fancybox.defaults.hash = false; // Interferes with turbolinks
    function fancyboxInit() {
        $("[data-fancybox]").fancybox({
            beforeShow: function (instance, slide) {
                jQuery('.fancybox-container').attr('data-turbolinks', false);
            }
        });
    }

    window.addEventListener('turbolinks:load', fancyboxInit);
    //window.addEventListener('load', fancyboxInit);

})()
