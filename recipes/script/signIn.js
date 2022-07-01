import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
let login = async(e)=>{
  e.preventDefault();
    let user_data = {
      username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
      };
      user_data = JSON.stringify(user_data);
      
       let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,
        {
        method:"POST",
        body:user_data,
  
        headers: {
          "Content-Type":"application/json",
        },
      });
      let data = await res.json();

      let username = document.querySelector('#username').value;
      getUserDetail(username, data.token);
    
    };



document.querySelector("#btn").addEventListener("click",login)
let getUserDetail = async (username, token) => {
  console.log("here");
let res = await fetch(
  `https://masai-api-mocker.herokuapp.com/user/${username}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

let data = await res.json();
        
        console.log('user data:', data)
};