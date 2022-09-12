
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
                <div class="searchicon"><i class="fa-solid fa-magnifying-glass"></i></div>
                
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