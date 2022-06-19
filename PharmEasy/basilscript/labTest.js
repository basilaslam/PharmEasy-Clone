import navbar from '../component/navbar.js'


let navDiv = document.getElementById('navbar')

navDiv.innerHTML = navbar()



var owl = $('.owl-one');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    nav: true,
  navText: ["<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>","<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>"]
});


var owl2 = $('.owl-two');
owl2.owlCarousel({
    items:2,
    loop:true,
    margin:220,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: false,
    nav: true,
  navText: ["<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>","<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>"]
});

var owl3 = $('.owl-three');
owl3.owlCarousel({
    items:4,
    loop:false,
    margin:0,
    autoplay:false,
    autoplayHoverPause:true,
    dots: false,
    nav: true,
  navText: ["<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>","<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>"]
});


var owl4 = $('.owl-four');
owl4.owlCarousel({
    items:2,
    loop:true,
    margin:100,
    autoplay:false,
    autoplayHoverPause:true,
    dots: false,
    nav: true,
  navText: ["<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>","<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>"]
});
