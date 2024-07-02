// Start Navbar
let dropDown =  document.querySelector(".bars-icon");
let ul =  document.querySelector(".dropdown ul");

dropDown.addEventListener("click", ()=>{
    ul.classList.toggle("hidden");
});



let addButton = document.querySelector(".add-product");

addButton.addEventListener("click", ()=>{
    window.location.href = "/modal.html"
});