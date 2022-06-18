import navbar from '../component/navbar.js'


// Appending Navbar
document.getElementById('navbar').innerHTML = navbar()
let all=[
    {
        image:"https://cms-contents.pharmeasy.in/offer/bb20b7c6548-2.jpg?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get flat 23% off on medicine + Get 15% upto Rs.200 Instant Discount + Flat Rs.300 AbhiBus Cashback" ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code:"Code: PABUS23" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
];



let medicine=[
{
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
];


let paymentmode=[
    // {
    //     image:"https://cms-contents.pharmeasy.in/offer/bb20b7c6548-2.jpg?dim=60x0&dpr=1.25&q=100" ,
    //     heading:"Get flat 23% off on medicine + Get 15% upto Rs.200 Instant Discount + Flat Rs.300 AbhiBus Cashback" ,
    //     code:"Code: PABUS23" ,
    //     copycode: "Copy Code",

    // },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
];





let diagnostic=[
{
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
]



let healthcare=[
{
        image:"https://cms-contents.pharmeasy.in/offer/dceebedd00f-Diagnostics-09-min.png" ,
        heading:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        des:"Get FLAT Rs.600 cashback on PharmEasy Labtests booked above Rs.1499." ,
        code: "Code: CSH600",
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        des:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699." ,
        code:"Code: CSHB200" ,
        copycode: "Copy Code",

    },
    {
        image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1.25&q=100" ,
        heading:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages." ,
        des:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packa" ,
        code:"Code: GRAND1000" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
    {
        image: "https://cms-contents.pharmeasy.in/offer/8500c9729db-logo_PhonePe_PhonePe.png?dim=60x0&dpr=1.25&q=100",
        heading: "Get flat 25% off on first medicine order + Easy my trip discount upto Rs.1000",
        des:"Get flat 25% discount to new users(Minimum Order Value-899) + Easy my trip discount upto Rs.1000" ,
        code:"Code: EASE25" ,
        copycode: "Copy Code",

    },
]







  document.getElementById("all").addEventListener("click",allfun);
    function allfun(){
       document.getElementById("offersec").innerHTML=null;

    event.preventDefault();
      all.map(function(el){
         var homediv= document.createElement("div");
        homediv.setAttribute("class","homediv");

         var div1= document.createElement("div");
         div1.setAttribute("class","sec1")


         var div2= document.createElement("div");
         div2.setAttribute("class","sec2");


         var div11= document.createElement("div");
         div11.setAttribute("class","imgsec");


         var div12= document.createElement("div");
         div12.setAttribute("class","headsec");




         var img=document.createElement("img");
         img.src=el.image;
         div11.append(img);
         var h3=document.createElement("h3");
         h3.innerText=el.heading;
         var p1=document.createElement("p");
         p1.innerText=el.des;
         div12.append(h3,p1);
         div1.append(div11,div12);



         var h3=document.createElement("h3");
         h3.innerText=el.code;
         var h2=document.createElement("h2");
         h2.innerText=el.copycode;
         h2.addEventListener("click",function(){
            var objcode={
                offerscode:el.code,
            }
            arr.push(objcode)
            alert("Code Copied Successfully !")
            console.log(arr)
            localStorage.setItem("offerscode",JSON.stringify(arr));

        })
         div2.append(h3,h2);



         homediv.append(div1,div2)
         document.getElementById("offersec").append(homediv);


      })        
16    }






document.getElementById("payment").addEventListener("click",paymentfun);
var arr=JSON.parse(localStorage.getItem("offerscode"))||[];
    function paymentfun(){
        document.getElementById("offersec").innerHTML=null;

    event.preventDefault();
    paymentmode.map(function(el){
         var homediv= document.createElement("div");
        homediv.setAttribute("class","homediv");

         var div1= document.createElement("div");
         div1.setAttribute("class","sec1")


         var div2= document.createElement("div");
         div2.setAttribute("class","sec2");


         var div11= document.createElement("div");
         div11.setAttribute("class","imgsec");


         var div12= document.createElement("div");
         div12.setAttribute("class","headsec");




         var img=document.createElement("img");
         img.src=el.image;
         div11.append(img);
         var h3=document.createElement("h3");
         h3.innerText=el.heading;
         var p1=document.createElement("p");
         p1.innerText=el.des;
         div12.append(h3,p1);
         div1.append(div11,div12);



         var h3=document.createElement("h3");
         h3.innerText=el.code;
         var h2=document.createElement("h2");
         h2.innerText=el.copycode;
         h2.addEventListener("click",function(){
             var objcode={
                 offerscode:el.code,
             }
             arr.push(objcode)
             alert("Code Copied Successfully !")
             console.log(arr)
             localStorage.setItem("offerscode",JSON.stringify(arr));

         })
         div2.append(h3,h2);



         homediv.append(div1,div2)
         document.getElementById("offersec").append(homediv);


      })        
16    }
  function myfun(el){
      alert("jnvldndlnbn")
  }



document.getElementById("medicine").addEventListener("click",medfun);
    function medfun(){
        document.getElementById("offersec").innerHTML=null;

    event.preventDefault();
    medicine.map(function(el){
         var homediv= document.createElement("div");
        homediv.setAttribute("class","homediv");

         var div1= document.createElement("div");
         div1.setAttribute("class","sec1")


         var div2= document.createElement("div");
         div2.setAttribute("class","sec2");


         var div11= document.createElement("div");
         div11.setAttribute("class","imgsec");


         var div12= document.createElement("div");
         div12.setAttribute("class","headsec");




         var img=document.createElement("img");
         img.src=el.image;
         div11.append(img);
         var h3=document.createElement("h3");
         h3.innerText=el.heading;
         var p1=document.createElement("p");
         p1.innerText=el.des;
         div12.append(h3,p1);
         div1.append(div11,div12);



         var h3=document.createElement("h3");
         h3.innerText=el.code;
         var h2=document.createElement("h2");
         h2.innerText=el.copycode;
         h2.addEventListener("click",function(){
            var objcode={
                offerscode:el.code,
            }
            arr.push(objcode)
            alert("Code Copied Successfully !")
            console.log(arr)
            localStorage.setItem("offerscode",JSON.stringify(arr));

        })
         div2.append(h3,h2);



         homediv.append(div1,div2)
         document.getElementById("offersec").append(homediv);


      })        
16    }


document.getElementById("diagnostic").addEventListener("click",diafun);
    function diafun(){
        document.getElementById("offersec").innerHTML=null;

    event.preventDefault();
      diagnostic.map(function(el){
         var homediv= document.createElement("div");
        homediv.setAttribute("class","homediv");

         var div1= document.createElement("div");
         div1.setAttribute("class","sec1")


         var div2= document.createElement("div");
         div2.setAttribute("class","sec2");


         var div11= document.createElement("div");
         div11.setAttribute("class","imgsec");


         var div12= document.createElement("div");
         div12.setAttribute("class","headsec");




         var img=document.createElement("img");
         img.src=el.image;
         div11.append(img);
         var h3=document.createElement("h3");
         h3.innerText=el.heading;
         var p1=document.createElement("p");
         p1.innerText=el.des;
         div12.append(h3,p1);
         div1.append(div11,div12);



         var h3=document.createElement("h3");
         h3.innerText=el.code;
         var h2=document.createElement("h2");
         h2.innerText=el.copycode;
         h2.addEventListener("click",function(){
            var objcode={
                offerscode:el.code,
            }
            arr.push(objcode)
            alert("Code Copied Successfully !")
            console.log(arr)
            localStorage.setItem("offerscode",JSON.stringify(arr));

        })
         div2.append(h3,h2);



         homediv.append(div1,div2)
         document.getElementById("offersec").append(homediv);


      })        
16    }




document.getElementById("healthcare").addEventListener("click",healthfun);
    function healthfun(){
        document.getElementById("offersec").innerHTML=null;

    event.preventDefault();
      healthcare.map(function(el){
         var homediv= document.createElement("div");
        homediv.setAttribute("class","homediv");

         var div1= document.createElement("div");
         div1.setAttribute("class","sec1")


         var div2= document.createElement("div");
         div2.setAttribute("class","sec2");


         var div11= document.createElement("div");
         div11.setAttribute("class","imgsec");


         var div12= document.createElement("div");
         div12.setAttribute("class","headsec");




         var img=document.createElement("img");
         img.src=el.image;
         div11.append(img);
         var h3=document.createElement("h3");
         h3.innerText=el.heading;
         var p1=document.createElement("p");
         p1.innerText=el.des;
         div12.append(h3,p1);
         div1.append(div11,div12);



         var h3=document.createElement("h3");
         h3.innerText=el.code;
         var h2=document.createElement("h2");
         h2.innerText=el.copycode;
         h2.addEventListener("click",function(){
            var objcode={
                offerscode:el.code,
            }
            arr.push(objcode)
            alert("Code Copied Successfully !")
            console.log(arr)
            localStorage.setItem("offerscode",JSON.stringify(arr));

        })
         div2.append(h3,h2);



         homediv.append(div1,div2)
         document.getElementById("offersec").append(homediv);


      })        
16    }

document.getElementById("mybtn").addEventListener("click",myFun);

function myFun() {
event.preventDefault();
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "Read more"; 
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "Read less"; 
moreText.style.display = "inline";
}
}


// import navbar from '../components/navbar.js'


// let navDiv = document.getElementById('navbar')

// navDiv.innerHTML = navbar()