// targetDiv.style.display = 'none';

// LINK WALLET SECTION

var targetDiv = document.getElementById('linkWalletDiv');

const linkWalletBtn = document.createElement('button');
linkWalletBtn.id = 'linkWalletBtn';
linkWalletBtn.innerText = 'Link Wallet';

targetDiv.append(linkWalletBtn);

let payment = JSON.parse(localStorage.getItem("payment")) ;
document.querySelector("#cartValuePrice").innerText ="₹"+ payment ;
document.querySelector("#deliveryChargePrice").innerText ="₹" + (payment+49) ;

var paymentCard = document.getElementsByClassName('paymentCard') ;

paymentCard.onclick = () => {
    
    if (targetDiv.style.display !== 'none') {
        targetDiv.style.display = 'none';
    }
    else {
        targetDiv.style.display = 'block';  
    }
}

