const backbutton = document.getElementById("backbutton")
backbutton.addEventListener("click", async ()=>{
    window.location.href = "/login"
})

backbutton.addEventListener("mouseover", async ()=>
{
    backbutton.style.color = "white"


})

backbutton.addEventListener("mouseout", async ()=>
{
    backbutton.style.color = "#ff007f"


})