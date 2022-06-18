

// export {getData};
/////////////////////////////////      Automtic Navigation start       /////////////////////////////////////////////

var counter = 1;
setInterval(function()
{
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter>4){
      counter=1;
  }
},3000);

/////////////////////////////////      Automtic Navigation End       //////////////////////////////////////////
////////////////////////////          CountDown Timer js start         ///////////////////////////////////////////////
let launchDate = new Date("Jun 20, 2022 12:00:00 ").getTime();
let timer = setInterval(tick,1000);
function tick()
{
let now = new Date().getTime();
let t=launchDate-now;
if(t>0)
{
    let days = Math.floor(t/(1000*60*60*24));
    if(days<10)
    {
        days="0"+days;
    }
    let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
    if(hours<10)
    {
        hours="0"+hours;
    }
    let mins = Math.floor((t%(1000*60*60)) / (1000*60));
    if(mins<10)
    {
        mins="0"+mins;
    }
    let secs = Math.floor((t%(1000*60))/1000);
    if(secs<10)
    {
        secs="0"+secs;
    }
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    document.querySelector("#countdown").innerText=time;
}
}
////////////////////////////          CountDown Timer js End            ///////////////////////////////////////////////
//////////////////////////////      Debouncing js Start         ////////////////////////////////////
let id;

async function searchMedicine(qwr)
{
    try{

        let url="https://rest-api-medicin.herokuapp.com/products";
        let res = await fetch(url);
        let data = await res.json();
        console.log("datass=",data);
        return data;
    }
    catch(err){
        console.log("Error");
    }
}


function appendMedicine(datas)
{
   
    if(datas==undefined)
    {
        return false;
    }
    datas.forEach(function(ele){
       let query = document.querySelector("#searchbar").value;
        if(ele.name.toUpperCase().includes(query.toUpperCase()))
        {
            let p = document.createElement("p");
        p.innerText = ele.name;
        p.addEventListener("click",function(){
            showoneMed(ele.image2,ele.name,ele.price);
        });

        document.querySelector("#debounce").append(p);
    }
    });

}
var arr=[];
function showoneMed(image,name,price)
{
    let obj={};
    obj.image=image;
    obj.name=name;
    obj.price=price;
    arr.push(obj);
    localStorage.setItem("showmed",JSON.stringify(arr));
    window.location.href="debouncesearch.html";
}

async function main()
{
    let qwr = document.querySelector("#searchbar").value;
    let response = searchMedicine(qwr);
    var datas = await response;
    console.log("datas=",datas);
    appendMedicine(datas);
}

    document.querySelector("#searchbar").addEventListener("input",function(){
        debounceFunction(main,10);
    });


function debounceFunction(func,delay)
{
    document.querySelector("#debounce").innerHTML=null;
 setTimeout(function (){
    func();
 },delay);
}

document.querySelector("#searchbar").addEventListener("click",showDeb);
function showDeb()
{
   let dbb = document.querySelector("#debounce");
   dbb.style.visibility="visible";

   let p1 = document.createElement("p");
   p1.innerText="Supradyn Daily Multivitamin Tablets 15s";
   let p2 = document.createElement("p");
   p2.innerText="Calcimax Forte Plus Strip Of 30 Tablets";
   let p3 = document.createElement("p");
   p3.innerText="Pharmeasy Multivitamin Multimineral - Pack Of 60";
   let p4 = document.createElement("p");
   p4.innerText="Arachitol Nano 60k Sugar Free Bottle Of 5ml Solution";
   let p5 = document.createElement("p");
   p5.innerText="Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs";
   let p6 = document.createElement("p");
   p6.innerText="Benadon Vitamin B6 40mg Tablet 10'S";


   dbb.append(p1,p2,p3,p4,p5,p6);
}

document.querySelector("#debounce").addEventListener("mouseleave",hideDeb);
function hideDeb()
{
    let hbb = document.querySelector("#debounce");
    hbb.style.visibility="hidden";
}