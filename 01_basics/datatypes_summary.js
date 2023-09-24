// Primitive Data-types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 7543697541236547569n
console.log(typeof bigNumber);



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["iron_man","hulk","shaktiman"];

let myObj = {
    name: "Shaktiman",
    age: 25
}

let MyFunction = function(){
    console.log("hello,World!");
}
// saare non premitive datatpes ka type obj hi aata hai ab agar mai
// MyFunction ka bhi check karo to function dikhega but vo hota ObjFunction hai

// null ka bhi type Obj hi hota hai


// ***********************************************************************8

// Stack (Primitive) and Heap (Non-Primitive)

let LinkedInName = "Saurabh Mishra"

let anotherName = LinkedInName
anotherName = "Data Analyst"

console.log(LinkedInName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    UPI_id : "user@ybl"
}
let userTwo = userOne

userTwo.email = "saurabh@google.com"

console.log(userTwo.email);
console.log(userOne.email);

// stack ke andr jo bhi jayega uska bus hame ek copy hi milta hai
// heap ke andr jo jata hai uska reference hame milta hai