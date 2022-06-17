
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

