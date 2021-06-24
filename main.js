

function sidebar(){
    /* Dropdown for the Account tab in Menu*/
let acc_btn = document.querySelector(".account-btn");
let acc_hidden = document.querySelector(".account-hidden")
let arrow_rotate = document.querySelector("i");
let menuList = document.querySelectorAll("li");

acc_btn.addEventListener("click", function(){
    let result = acc_hidden.classList.toggle("show")
    arrow_rotate.classList.toggle("arrow-rotate")

if (result){
    acc_hidden.style.display = "block"
}
else{
    acc_hidden.style.display = "none"
}
});
/*-------------------TOGGLING CLICKS THROUGH EACH CATEGORY------*/
for(let i=0; i<menuList.length; i++){
menuList[i].addEventListener("click", function(){
     $(this).toggleClass("active").siblings().removeClass("active")

})
}
}
/*----------------------------MENU Button Movement------------------------*/

let menu_icon = document.querySelector(".menu-icon")


menu_icon.addEventListener("click", function(){
    let side_bar = document.querySelector(".sidebar");
    let logo = document.querySelector(".logo")
    menu_icon.classList.toggle("menu-click")
    side_bar.classList.toggle("show")
    logo.classList.toggle("show");
    sidebar();
})
/*------------------------------------------------------------------*/



