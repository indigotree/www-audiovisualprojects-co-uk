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
            autoplay: true,
            autoplaySpeed: 8000,
            cssEase: 'linear'
        });

        $('#carousel').on('beforeChange', function (event, slick, currentSlide) {
            $('[data-slick-index="' + currentSlide + '"]').find('.carousel__media').removeClass('carousel--zoom');
        });

        $('#carousel').on('afterChange', function (event, slick, currentSlide) {
            $('[data-slick-index="' + currentSlide + '"]').find('.carousel__media').addClass('carousel--zoom');
        });

        $('#partners').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        })
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
