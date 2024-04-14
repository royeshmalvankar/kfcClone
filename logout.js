let isAuth = localStorage.getItem("isAuth") || "Not Auntenticated"
if(isAuth === "Authenticated")
{
    let lgn=document.querySelector("#signin")
    // let div =document.createElement("div")
    lgn.innerText = "logout"
    
    lgn.onclick=function()
    {
        localStorage.setItem("isAuth","Not Authenticated")
        lgn.href="./login.html"
        alert("Logged Out")
    }
    // div.append(button)
    lgn.append(button)
}