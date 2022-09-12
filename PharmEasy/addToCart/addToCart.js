import navbar from '../component/navbar.js'


// Appending Navbar
document.getElementById('navbar').innerHTML = navbar()

//Step 1: Extracting/Obtaining the array of data objects (that was added to WishList) from localStorage, stored with the key wishlistObj
var cartProductArr = JSON.parse(localStorage.getItem("cartProduct")) || [];
let productNumber =  JSON.parse(localStorage.getItem("Number")) ;

document.querySelector("#Number").innerText = productNumber ;

let Payment = JSON.parse(localStorage.getItem("payment")) || 0; 
document.querySelector("#payment").innerText ="₹"+Payment ;
document.querySelector("#payment1").innerText ="₹"+Payment ;

window.addEventListener("load", function () {
    displayCartList(cartProductArr)
    console.log(cartProductArr);
})

//Function to display Wishlists:
function displayCartList(cartProductArr) {
    cartProductArr.forEach(function (ele, i){
        console.log(ele) ;
        let cont = document.querySelector("#cartCards") ;
        let div = document.createElement("div") ;
        div.id = "card_box"

        let div1 = document.createElement("div") ;
        div1.style.width = "20%"
        // div1.style.border = "1px solid " ;

        let div2 = document.createElement("div") ;
        div2.style.width = "60%"
        let div3 = document.createElement("div") ;


        let image = document.createElement("img") ;
        // image.style.margin = "auto"
        image.src = ele.image1 ;

        let name = document.createElement("p") ;
        name.innerText = ele.name ;

        let price = document.createElement("h3") ;
        price.innerText ="RS. "+  ele.price ;

        let select = document.createElement("select") ;
        select.style.width  = "18%"
        select.style.height  = "30%"
        let option = document.createElement("option") ;
        option.innerText = "QTY" ;

        let option1 = document.createElement("option") ;
        option1.innerText = 1 ;

        let option2 = document.createElement("option") ;
        option2.innerText = 2 ;

        let option3 = document.createElement("option") ;
        option3.innerText = 3 ;

        let option4 = document.createElement("option") ;
        option4.innerText = 4 ;
        select.append(option,option1,option2, option3 ,option4) 

        let removeBtn = document.createElement("img")
        removeBtn.src = "https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
        removeBtn.setAttribute("class", "remove") ;
        removeBtn.addEventListener("click", function (){
            productNumber--
            localStorage.setItem("Number", JSON.stringify(productNumber)) ;

            Payment -= ele.price ;
            Payment = Math.floor(Payment) ;
            if(productNumber==0){
                Payment =0 ;
            }
            localStorage.setItem("payment", JSON.stringify(Payment))

            cartProductArr.splice(i,1) ;
            localStorage.setItem("cartProduct",JSON.stringify(cartProductArr)) ;
            window.location.reload() ;
        })


        div1.append(image) ;
        div2.append(name, price, select);
        div3.append(removeBtn)  ;
        div.append(div1, div2, div3) ;
        cont.append(div)
    })
}

// function removefunction(e,i){
//     cartProductArr.splice(i,1);
//     localStorage.setItem("cartProduct",JSON.stringify(wishLists));
//     window.location.reload()
// }


function homePage2() {
    window.open("index.html", "_self");
}
function homePage(){
   window.open("index.html","_self");
}
function searchPage(){
   window.open("searchPage.html","_self");
}

function appstore() {
    window.open("https://apps.apple.com/app/id1104996296?mt=8", "_self");
}

function playstore() {
    window.open("https://play.google.com/store/apps/details?id=com.hometogo&referrer=adjust_reftag%3DcoKRyerthl2QX%26utm_source%3DHomeToGo%2BSite%26utm_campaign%3DFooter%2BFrontdoor", "_self");
}





















// cartProductArr.map(function (e,i) {

    //     var box = document.createElement('div');
    //     box.id = "outer";
        
    //     //product Logo Div/Column
    //     var box1 = document.createElement('div');
    //     box1.id = "cartCol1";
        
    //     //product Logo Img
    //     var productLogo = document.createElement('img')
    //     productLogo.id = 'productLogoImg'
    //     productLogo.src = e.image1;

    //     //Appending Product Logo to First Column Div
    //     box1.append(productLogo);

    //     var box2 = document.createElement('div');
    //     box2.id = "cartCol2";

    //     var productNameDiv = document.createElement('div')
    //     productNameDiv.id = 'productNameDiv';

    //     var productName = document.createElement('h3');
    //     productName.id = 'productName';
    //     productName.innerText = e.name;

    //     // REMOVE BUTTON
    //     var removeBtn = document.createElement('button');
    //     removeBtn.id = 'removeBtn';
        
    //     removeBtn.innerText = 'Remove';
    //     removeBtn.addEventListener("click", function(){
    //        removeBtnfunction(e,i)
    //    })   

    //    //Appending Product Name & Remove Button to Product Name Div
    //    productNameDiv.append(productName,removeBtn);
       
    //    var cartPriceDiv = document.createElement('div')
    //    cartPriceDiv.id = 'cartPriceDiv';

    //    var cartPrice = document.createElement('h3');
    //    cartPrice.id = 'cartPrice';
    //    cartPrice.innerText = '₹' + e.price;

    //    var manufacturer = document.createElement('h3');
    //    manufacturer.id = 'manufacturer';
    //    manufacturer.innerText = 'By Cipla';

    //    var weight = document.createElement('h3');
    //    weight.id = 'weight';
    // //    weight.innerText = '1l liquid in Bottle'

    //    var deliveryDate = document.createElement('h3');
    //    deliveryDate.id = 'deliveryDate';
    //    deliveryDate.innerText = 'Delivery in Two Days, before 10PM'


    //    cartPriceDiv.append(manufacturer, weight, deliveryDate,cartPrice);
       
    //    //Appending Product Name Div & Cart Price Div to 2nd Column Div
    //    box2.append(productNameDiv,cartPriceDiv);
       
    //    box.append(box1, box2);

    //   var cartCards = document.querySelector('#cartCards');
    //   cartCards.append(box)

      
    // })