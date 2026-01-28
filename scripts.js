"use strict";

let find = document.querySelector("#find");
let author = document.querySelectorAll("#author");
let names = document.querySelectorAll("#name");
let cards = document.querySelectorAll(".card");

find.addEventListener("click", ()=>{
    let search = document.querySelector("#search").value;
    for(let i=0; i<author.length; i++){
        if(names[i].innerText == search || author[i].innerText == search) {
            cards[i].style.border = "3px solid yellow";
        }
        else{
             cards[i].style.border = "3px solid gray";
        }
    }
})

let buy = document.querySelectorAll("#buy");
let cart_button = document.querySelector(".cart");
let cart = document.querySelector(".cart_block");

for(let i=0; i<buy.length; i++) {
    buy[i].addEventListener("click", ()=>{
        let name_p = document.createElement("p");
        name_p.innerText = names[i].innerText;
        cart.append(name_p);
    })
}

cart_button.addEventListener("click", ()=> {
    cart.classList.toggle("open")
})