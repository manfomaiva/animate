let  menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}
var swiper = new swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:7500,
           
    }
});