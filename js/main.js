$(document).ready(function() {



    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#fff', '#fff', '#FF6400', '#1BBC9B', '#7E8F7C'],
        autoScrolling: false
    });

    $('.owl-carousel').owlCarousel({
        //navContainer: '#customNav',
        smartSpeed: 250,
        animateIn: 'fadeOut',
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});
