function navbar(){
    return `
        <div id="navtop">
            <div id="mainlogo">
              <a href="./index.html">  <img class="mainlogo" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="1"></a>
            </div>
            <div id="bar">
                <select name="" id="select">
                    <option value="">Select Pincode</option>
                    <input id="searchbar" type="Search" placeholder="|   Search medicines/Healthcare products">
                    <div class="searchicon">
                    <i class="fa-solid fa-magnifying-glass" ></i>
                          <img style="background-color:teal, border:0px solid transparent "id="searchicon" alt=""></div>
                          
                </select>
            </div>

        </div>
        <div id="navbottom">
            <div id="left">
             <div id="or"> Order Medicines</div>
                <div>Healthcare Products</div>
                <div>Lab Tests</div>
                <div>RTPCR</div>
            </div>
            <div id="right">
                <div><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="">
                    <div class="center">Offers</>
                    </div>
                </div>
                <div><img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="">
                    <div class="center" id="login">Login/Signup</div>
                </div>
                <div><img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="">
                    <div class="center">Cart</div>
                </div>
            </div>
        </div>
    
    `
}
export default navbar; 