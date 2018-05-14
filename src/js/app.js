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

})()
