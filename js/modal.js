
// Hanlde Add Product Button
let getUrl = document.querySelector("#url");
let getName = document.querySelector("#name");
let getPrice = document.querySelector("#price");
let getDesc = document.querySelector("#desc");
let add = document.querySelector(".add");



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



