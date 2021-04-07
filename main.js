// OBJECT LITERALS
const cart = document.getElementById("cart");

//ES5
// function addProduct(name,category){
//     return{
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 12", "Smartphone");

// console.log(getProduct);

// cart.innerHTML = `product 1: ${getProduct.name}, ${getProduct.category}`;

//ES6
function addProduct(name,category){
    return{productName: name, category}
}

var getProduct = addProduct("iPhone 12", "Smartphone");

console.log(getProduct);

cart.innerHTML = `product 1: ${getProduct.productName}, ${getProduct.category}`;