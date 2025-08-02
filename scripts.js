c=document.getElementById("car")

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      c.style.transform += "translateX(-20vw)";
    } else if (e.key === "ArrowRight") {

         c.style.transform += "translateX(20vw)";
    } 
})


