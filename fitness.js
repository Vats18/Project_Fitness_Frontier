 window.onload=function()
 {
    let startbtn = document.getElementById("get-start");
    startbtn.addEventListener("click" , function (){
        console.log("Get Start Button Clicked");
    })

    let planbtn = document.getElementById("planbt");
    planbtn.addEventListener("click" , function (){
        console.log("Workout Plan Button Clicked");
    })

    let trainerbtn = document.getElementById("hire");
    trainerbtn.addEventListener("click" , function (){
        console.log("Hire Trainer Button Clicked");
    })
 }