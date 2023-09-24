let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNuber = Number(score)
console.log(typeof(valueInNuber));
console.log(valueInNuber);

// "33" => 33
// "33abc" => NaN iska mtlb hai ki not a number but type number dikhayega
// true => 1; false =>0;
// undefined => NaN
// null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0=>false
// "" => false
// "Saurabh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************Operations*************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log("3" + 3);
console.log(3 + "3");
console.log(3 + 3 + "3");
console.log("3" + 3 + 3);

console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter); //postfix mai baad mai increment hota hai pehle number ka operation hoga

++gameCounter
console.log(gameCounter); // prefix mai pehle increament hota hai