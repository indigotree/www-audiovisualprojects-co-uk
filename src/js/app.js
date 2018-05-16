(function () {

    function toggleNavigation(event) {
        document.body.classList.toggle('navigation--open')
    }
    
    var navToggle = document.getElementById('navigation-toggle')
    navToggle.addEventListener('click', toggleNavigation, false)


    var sticky = document.getElementById('header').offsetTop
    window.onscroll = function () {
        document.body.classList[window.pageYOffset >= sticky ? 'add' : 'remove']('header--fixed')
    }

    $(function() {
        $('#carousel').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

})()
