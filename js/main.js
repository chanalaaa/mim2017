$(document).ready(function() {



    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['section', 'section02', 'section03','section04','section05'],
        sectionsColor: ['#fff', '#fff', '#FF6400', '#000', '#7E8F7C'],
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
