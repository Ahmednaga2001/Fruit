
// Hanlde Add Product Button
let getUrl = document.querySelector("#url");
let getName = document.querySelector("#name");
let getPrice = document.querySelector("#price");
let getDesc = document.querySelector("#desc");
let add = document.querySelector(".add");
let edit = document.querySelector(".edit");
console.log(edit);



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

       

            localStorage.setItem("products", JSON.stringify(arr));

            getUrl.value = "";
            getName.value = "";
            getPrice.value = "";
            getDesc.value = "";
            window.location.href = "index.html"
        }
    } else {
        alert("دخل البيانات ي نجوميه");
    }
});





(function(){
    if(localStorage.getItem("edit-product")){
        const product = JSON.parse(localStorage.getItem("edit-product"))
        console.log(product);
        getUrl.value = product.url
        getName.value = product.name
        getPrice.value = product.price
        getDesc.value = product.desc
    }
})();



edit.addEventListener("click",(e)=>{
    let arr = JSON.parse(localStorage.getItem("products"))
    e.preventDefault()
    const product = JSON.parse(localStorage.getItem("edit-product"))
    console.log(product.name);
   let index =    arr.map((item,index)=>{
    if(item.name===product.name) return index
}).join("")
let indexNum = Number(index)
arr[indexNum].url = getUrl.value
arr[indexNum].name = getName.value
arr[indexNum].desc = getDesc.value
arr[indexNum].price = getPrice.value
localStorage.setItem("products", JSON.stringify(arr));

window.location.href = "index.html"
})