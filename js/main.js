// HEADER SCROLL 
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// NAV HIDE 

let navBar = document.querySelector(".nav-links");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
e.addEventListener("click" , function(){
    navCollapse.classList.remove("show");
})
})