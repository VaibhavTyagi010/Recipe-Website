
let  getdata= async(url)=>{
    try{
     let res = await fetch(url)
    let data= await res.json()
    return data.meals
    }
    catch(err)
    {
        console.log(err)
    }

}

function append(data)
{ 
    document.querySelector("#box").innerHTML=null
  data.map(({strMealThumb,strInstructions,strMeal,strYoutube})=>{
    let div=document.createElement("div")
    let name=document.createElement("h3")
    let detail=document.createElement("p1")
    let video=document.createElement("a")
    video.setAttribute("id","video")
    let image=document.createElement("img")
    image.src=strMealThumb
    name.innerText=strMeal
    detail.innerText=strInstructions
    video.href=strYoutube
    video.innerHTML='watch receipe'
    div.append(image,name,detail,video)
document.querySelector("#box").append(div)
});
}

export {getdata,append}