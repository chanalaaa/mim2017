$(document).ready(function() {



    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#fff', '#fff', '#7E8F7C', '#1BBC9B', '#7E8F7C'],
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
        navText: ["<img src='./images/left.png'>","<img src='./images/left.png'>"],
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});
