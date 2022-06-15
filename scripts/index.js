import navbar from '../components/navbar.js'


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


var owl = $('.owl-two');
owl.owlCarousel({
    items:8,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    nav: true,
  navText: ["<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>","<img src='https://assets.pharmeasy.in/web-assets/dist/a9a45455.svg'>"]
});

