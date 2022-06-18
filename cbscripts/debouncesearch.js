let showmedicine = JSON.parse(localStorage.getItem("showmed"));
document.querySelector("#onemedicine").innerHTML=null;
showmedicine.forEach(function(elem){
    
    let boxx=document.createElement("div");

let image = document.createElement("img");
image.src = elem.image;
let name = document.createElement("h1");
name.innerText=elem.name;
let price = document.createElement("p");
price.innerText=elem.price;

boxx.append(image,name,price);
document.querySelector("#onemedicine").append(boxx);
});
