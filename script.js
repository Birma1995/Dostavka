
// const URL = "https://api.npoint.io/cb813f0631a92ead42dc";

// class GoodsItem{
//     constructor(title, description, weight, price) {
//         this.title = title;
//         this.description = description;
//         this.weight = weight;
//         this.price = price;
//     }
    
//     render() {
//         return`<div class="foodcard" <h3>${this.title}</h3><a>${this.discription}</a> <a>Вес: ${this.weight}</a> <p>${this.price}</p></div> `
//     }
// }

let cart = 0;
function add() {
    cart += 1;
    label.text = cart;
    console.log(cart);
    hide();
}
function remove() {
    cart -= 1;
    label.text = cart;
    hide();
}
document.querySelector("button.add").addEventListener("click", add);
document.querySelector("button.remove").addEventListener("click", remove);
let label = document.querySelector("a.itemnumber");

let button = document.querySelector("button.cartadd");
let bar = document.querySelector("div.cartadjust");
button.addEventListener("click", add);
function hide() {
    if (cart == 0) {
        button.style.display = "block";
        bar.style.display = "none"; 
    }
    else {
        bar.style.display = "block";
        button.style.display = "none"; 
    }
}
