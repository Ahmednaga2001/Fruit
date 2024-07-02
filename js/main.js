// Start Navbar
let dropDown =  document.querySelector(".bars-icon");
let ul =  document.querySelector(".dropdown ul");

dropDown.addEventListener("click", ()=>{
    ul.classList.toggle("hidden");
});




let cards = document.querySelector(".cards");
const getProducts = JSON.parse(localStorage.getItem("products"))
console.log(getProducts);

    

const remove = (i)=>{
    console.log(i);
    console.log(getProducts.splice(i,1));
    getProducts.splice(i,1)
    localStorage.setItem("products" , JSON.stringify(getProducts))
    window.location.reload()
    console.log(getProducts);
}

for(let i = 0 ; i<getProducts.length ; i++){
    let card =  `<div class="card bg-[#494747ab] mx-auto md:mx-0 max-w-sm md:max-w-lg rounded-md overflow-hidden ">
              <img src=${getProducts[i].url} class="w-full h-[300px]" alt="" srcset="">
            <div class="p-2 space-y-2">
            <h2 class="">${getProducts[i].name}</h2>
            <p class="">${getProducts[i].desc}</p>
            <span class="block">${getProducts[i].price}</span>
            <div class="buttons flex gap-4 ">
            <div class="quantity border w-full flex justify-evenly p-1">
                <button><i class="fa-solid fa-plus"></i></button>
                <span>1</span>
                <button><i class="fa-solid fa-minus"></i></button>
            </div>
            <button class="w-full bg-red-500" onClick=remove(${i})>Remove</button>
            </div>
            </div>
        </div>
        `;
cards.innerHTML += card

}