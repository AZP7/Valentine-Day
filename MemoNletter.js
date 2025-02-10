const youNme = document.getElementById("youNme");
const firstSection = document.querySelector(".firstSection");
const secondSection = document.querySelector(".section2");
const thirdSection = document.querySelector(".section3");

youNme.addEventListener("click",()=>{
    firstSection.style.display = "none";
    secondSection.style.display = "block";
    thirdSection.style.display = "grid";

})