 import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar()

let id
let  debounced=()=>{
    if (id)
    {
        clearTimeout(id)
    }
     id=setTimeout(function(){
       result() 
    },500);
}
import { getdata,append } from "./fetch.js"; 

getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`).then((res)=>{
    append(res)
})
let result= async()=>{
    let name=document.querySelector("#input").value
    if(name!=="")
    {
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
   
    
     getdata(url).then((res) =>{
         
          if(res===undefined || res===null)
        { 
        document.querySelector("#box").innerHTML=null
            let image=document.createElement("img")
            image.setAttribute("id","mg")
           image.src="https://camo.githubusercontent.com/b072d70d9b361534bbb5f1d2dc489691b2984dd5cf00173c01355fa1ed449064/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f785541376237643355724c50546b793079512f67697068792e676966"
           document.querySelector("#box").append(image)
        }
        else
        append(res)
    }) 
}
else
return false
}

document.querySelector("#input").addEventListener("input",debounced)



