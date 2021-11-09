$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoWidth: true,
    slideTransition: 'ease-in',
    responsive:{
        768:{
            items:3
        },
        1000:{
            items:6
        }
    }
})