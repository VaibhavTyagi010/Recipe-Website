import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar()

import { getdata,append } from "./fetch.js"; 
    
    let url =`https://www.themealdb.com/api/json/v1/1/random.php`
   
    
     getdata(url).then((res) =>{
         
         if(res===undefined)
         return false
        append(res)
    }) 
