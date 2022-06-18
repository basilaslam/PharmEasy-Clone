
async function getData(query)
{
   
    try{
      //  
        let url="https://rest-api-medicin.herokuapp.com/products";
        let res = await fetch(url);
        let data = await res.json();
        console.log("data=",data);
        return data;
    }
    catch(err){
        console.log("Error");
    }
}
export {getData};

function cbnavbar()
{
    return ` <div id="navtop">
    <div id="mainlogo">
      <a href="index.html">  <img class="mainlogo" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt=""></a>
    </div>
    <div id="bar">
            <select name="" id="select">
                <option value="">Select Pincode  </option> 
                <input id="searchbar" type="Search" placeholder=" | Search medicines/Healthcare products">
                <div class="searchicon"><img id="searchicon" src="data:image/png;base64,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" alt=""></div>
            </select>
    </div>
    
</div>
<div id="navbottom">
    <div id="left">
       <a href="./orderPage.html"> <div>Order Medicines</div></a>
       <a href="./healthProducts.html"> <div>Healthcare Products</div></a>
      <a href="./labTest.html">  <div>Lab Tests</div></a>
       <a href="rtcpr.html"> <div>RTPCR</div></a>
    </div>
    <div id="right">
    <div><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt=""><a href="./offers.html"> <div class="center">Offers</></div></a></div>
       <div><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt=""> <a href="#"><div id="login" class="center">Login/Signup</div></div></a>
        <div><img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt=""><a a href="./add to cart/addToCart.html"><div class="center">Cart</div></a></div>
    </div>
</div>`;
}

export default cbnavbar;