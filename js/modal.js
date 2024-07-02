// Hanlde Add Product Button
let getUrl = document.querySelector("#url");
let getName = document.querySelector("#name");
let getPrice = document.querySelector("#price");
let getDesc = document.querySelector("#desc");
let add = document.querySelector(".add");



let arr = [];
add.addEventListener("click", (e)=>{
    e.preventDefault();
    if(getUrl.value !== "" && getName.value !== "" && getPrice.value !== "" && getDesc.value !== "" ){
        arr.map((el)=>{
            if(el.name != getName.value){
                let obj = {
                    url : getUrl.value,
                    name : getName.value,
                    price : getPrice.value,
                    desc : getDesc.value,
                }
                arr.push(obj);
                console.log(arr);
            }
            else{
                alert("The Product Founded");
            }
        });
    }
    else{
        alert("دخل البيانات ي نجم");
    }
    // getUrl.value = "";
    // getName.value = "";
    // getPrice.value = "";
    // getDesc.value = "";
});


