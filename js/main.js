
let barsIcon = document.querySelector(".bars-icon");
let icon = document.querySelector(".bars-icon i");
let dropDown = document.querySelector(".dropdown-menu");


function barsIconClick (){
        dropDown.classList.toggle("animation");
    
        if(dropDown.classList.contains("animation")){
            icon.classList.replace("fa-bars", "fa-x");
        }else{
            icon.classList.replace("fa-x", "fa-bars")
        }
}


let cards = document.querySelector(".cards");
const getProducts = JSON.parse(localStorage.getItem("products"))

    


for(let i = 0 ; i<getProducts.length ; i++){
    let card =  `<div class="card bg-[#494747ab] mx-auto md:mx-0 max-w-sm md:max-w-lg rounded-md overflow-hidden ">
              <img src=${getProducts[i].url} class="w-full h-[300px]" alt="" srcset="">
            <div class="p-2 space-y-2">
            <div class="flex items-center justify-between">
              <h2 class="product-name">${getProducts[i].name}</h2>
              <span class = "text-xl text-yellow-500 hover:text-red-600 cursor-pointer" onclick=addToFavourite(${i})><i class="fa-solid fa-heart"></i></span>
            </div>
            <p class="">${getProducts[i].desc}</p>
            <span class="block">${getProducts[i].price}</span>
       
          <div class="buttons flex gap-4">
            <button class="w-full bg-red-500 p-1" onClick="removeProduct(${i})">REMOVE</button>
                        <button class="w-full p-1 bg-indigo-600" onClick="editProduct(${i})">EDIT</button>
          </div>

            </div>
            </div>
        </div>
        `;
cards.innerHTML += card

}

let favArr = JSON.parse(localStorage.getItem("favProducts")) || [];
const addToFavourite = (i) => {
    let product = getProducts[i];
    let productExists = favArr.some(el => el.name === product.name);

    if (!productExists) {
        favArr.push(product);
        localStorage.setItem("favProducts", JSON.stringify(favArr));
        showFavProducts();
    } else {
        alert("The product is already in the favorites list");
    }
};
let favCards = document.querySelector(".fav-cards")
const showFavProducts = () => {
    favCards.innerHTML = ''; 
    favArr.forEach(product => {
        let favCard = `
         <div class="fav-card bg-[#494747ab] mx-auto md:mx-0 max-w-sm md:max-w-lg rounded-md overflow-hidden ">
              <img src=${product.url} class="w-full h-[300px]" alt="" srcset="">
            <div class="p-2 space-y-2">
            <div class="flex items-center justify-between">
              <h2 class="product-name">${product.name}</h2>
              <span class = "text-xl text-red-600 cursor-pointer"><i class="fa-solid fa-heart"></i></span>
            </div>
            <p class="">${product.desc}</p>
            <span class="block">${product.price}</span>
            <div class="buttons flex gap-4">
            <button class="w-fit py-2 px-6 rounded-md mx-auto bg-red-500 hover:bg-red-600 cursor-pointer" onClick="removeFromFavourites(${favArr.indexOf(product)})">Remove</button>
            </div>
            </div>
        </div>`;
        favCards.innerHTML += favCard;
    });
};

const removeFromFavourites = (i) => {
    favArr.splice(i, 1);
    localStorage.setItem("favProducts", JSON.stringify(favArr));
    showFavProducts();
};

// Show the initial products and favourite products
showFavProducts();

// Remove Product From Shoop And Favorite
function removeProduct (i){
    let checkIfProductExistInFavorite = favArr.some(el => el.name === getProducts[i].name);
    if(checkIfProductExistInFavorite){
        let indexOfCard = favArr.map((el, index)=>{
            if(el.name === getProducts[i].name){
                return index;
            }else{
                return;
            }
        }).join("");
        favArr.splice(Number(indexOfCard), 1);
        localStorage.setItem("favProducts", JSON.stringify(favArr));
        window.location.reload()
        
    }
    getProducts.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(getProducts));
    window.location.reload()
}

const editProduct = (i)=>{
console.log(getProducts[i])
localStorage.setItem("edit-product" , JSON.stringify(getProducts[i]))
location.href = "modal.html"
}
