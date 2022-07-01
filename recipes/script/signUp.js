import navbar from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar()

let register = async (e) => {
      e.preventDefault();
    let form_data = {
      name: document.querySelector("#name").value,
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      mobile: document.querySelector("#mobile").value,
    };
    form_data = JSON.stringify(form_data);
   console.log(form_data)
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method: "POST",
        body: form_data,

        headers: {
            "Content-Type": "application/json"
        }
    })
    let data = await res.json();

    console.log(data);

}
document.getElementById("btn").addEventListener("click", register);
