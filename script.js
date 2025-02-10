const PasswordtoEntet = "03122023"; 

let buttons = document.querySelectorAll(".numberBtn ");

const PwdInput = document.getElementById("PwdInput");

const LoginBtn = document.getElementById("LoginBtn");

buttons.forEach(button=>{
  button.addEventListener("click",()=>{
    PwdInput.value += button.textContent; 
  })
})

LoginBtn.addEventListener("click",(e)=>{

  e.preventDefault();
  if(!PwdInput.value || PwdInput.value !== PasswordtoEntet){
        PwdInput.classList.add("error");
        PwdInput.value ="";
        PwdInput.addEventListener("animationend",()=>{
              PwdInput.classList.remove("error")
        })
  }
  else if(PwdInput.value === PasswordtoEntet){
    window.location.href = "homepage.html"
  }

})



function CreateHeart(){
    const heart = document.createElement("DIV");
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>` ;

    heart.style.left = Math.random()* 100 + "vw";

    const duration = Math.random() * 3 + 3;

    heart.style.fontSize = Math.random() * 1 +2 + "rem"
 
    heart.style.animation = ` falling ${duration}s linear`;

    heart.classList.add("heart");

    document.getElementById("container").appendChild(heart);

    setTimeout( ()=>{
      heart.remove()
    }, duration * 1000)
}
setInterval( CreateHeart, 500);


