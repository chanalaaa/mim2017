$(document).ready(function() {



    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#fff', '#1BBC9B', '#7E8F7C', '#1BBC9B', '#7E8F7C'],
        autoScrolling: false
    });

    $('.owl-carousel').owlCarousel({
        navContainer: '#customNav',
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});
