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

    function loadDeferredStyles() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
    }

    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    if (raf) {
        raf(function() { 
            window.setTimeout(loadDeferredStyles, 0);
        });
    } else {
        window.addEventListener('load', loadDeferredStyles);
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
