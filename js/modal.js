
// Hanlde Add Product Button
let getUrl = document.querySelector("#url");
let getName = document.querySelector("#name");
let getPrice = document.querySelector("#price");
let getDesc = document.querySelector("#desc");
let add = document.querySelector(".add");
let cards = document.querySelector(".cards");



add.addEventListener('click', (e) => {
    e.preventDefault();

    if (getUrl.value !== "" && getName.value !== "" && getPrice.value !== "" && getDesc.value !== "") {

        let arr = JSON.parse(localStorage.getItem("products")) || [];

        let productExists = arr.some(el => el.name === getName.value);

        if (productExists) {
            alert("المنتج موجود ي نجوميه");
        } else {
            let obj = {
                url: getUrl.value,
                name: getName.value,
                price: getPrice.value,
                desc: getDesc.value
            };
            arr.push(obj);
            console.log(arr);

            arr.map((el)=>{
                let card =  `<div class="card bg-[#494747ab] mx-auto md:mx-0 max-w-sm md:max-w-lg ">
                    <img src=${el.url} alt="" srcset="">
                    <div class="p-2 space-y-2">
                    <h2 class="">${el.name}</h2>
                    <p class="">${el.desc}</p>
                    <span class="block">${el.price}</span>
                    <div class="buttons flex gap-4 ">
                    <div class="quantity border w-full flex justify-evenly p-1">
                        <button><i class="fa-solid fa-plus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-minus"></i></button>
                    </div>
                    <button class="w-full bg-red-500">Remove</button>
                    </div>
                    </div>
                </div>
                `;
            cards.appendChild(card)
            })

            localStorage.setItem("products", JSON.stringify(arr));

            getUrl.value = "";
            getName.value = "";
            getPrice.value = "";
            getDesc.value = "";
        }
    } else {
        alert("دخل البيانات ي نجوميه");
    }
});



