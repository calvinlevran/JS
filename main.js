// // ES5
// var myName = "Calvin"
// myName = "mik"
// console.log(myName)

// // ES6
// //const / constant
// const myCar = "Mazda EX-7"
// // const myCar = "Honda Freed"
// // myCar = "Honda ABC"
// console.log(myCar);

var myCarsVar = ["BMW", "Tesla", "Toyota"];

for(var i = 0; i<myCarsVar.length; i++){
    console.log("My Cars Vars = " + myCarsVar[i])
}

console.log(i);

const myCarsLet = ["BMW", "Tesla", "Toyota"];

for(let x = 0; x<myCarsVar.length; x++){
    console.log("My Cars Vars = " + myCarsLet[x])
}

console.log(x);