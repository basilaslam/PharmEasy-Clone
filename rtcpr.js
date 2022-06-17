thyrocareDiv.style.display = 'none'

var targetDiv = document.getElementById('rtpcr-col-2');

const rtpcrBtn = document.getElementById('covid-test-select-button');
rtpcrBtn.onclick = () => {
    // if (targetDiv.style.display !== 'none') {
    //     targetDiv.style.display = 'none';
    // }
    // else {
    //     targetDiv.style.display = 'block';  
    // }
    targetDiv.style.display = 'none';
    rtpcrDivReveal.style.display = 'block'
    rtpcrBtn.style.display = 'none';
    thyrocareDiv.style.display = 'block'
}

const rtpcrDivReveal = document.getElementById('rtpcr-cart-reveal');
rtpcrDivReveal.style.display = 'none';

var rtpcrViewCartBtn = document.getElementById('view-cart-btn');

rtpcrViewCartBtn.onclick = () => {
    targetDiv.style.display = 'none';

    rtpcrDivReveal.style.display = 'block'
}


