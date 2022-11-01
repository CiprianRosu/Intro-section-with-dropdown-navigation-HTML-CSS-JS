const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

 options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
     });
 });




// const optionMenu2 = document.querySelector(".select-menu2"),
//        selectBtn2 = optionMenu2.querySelector(".select-btn2"),
//        options2 = optionMenu2.querySelectorAll(".option2"),
//        sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

// selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active2"));       

// options2.forEach(option =>{
//     option.addEventListener("click", ()=>{
//         // let selectedOption = option.querySelector(".option-text").innerText;
//         // sBtn_text.innerText = selectedOption;

//         optionMenu2.classList.remove("active2");
//     });
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))