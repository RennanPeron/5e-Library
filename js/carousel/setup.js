$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoWidth: true,
    slideTransition: 'ease-in',
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        1000:{
            items:6
        }
    }
})