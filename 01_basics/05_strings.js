const name = "saurabh"
const repoCount = 10

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is a new method 

const gameName = new String('Saurabh-m')
console.log(gameName[0]);
console.log(gameName.__proto__); // you can check all the method in browser cosole by adding this command
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));
console.log(gameName.length);

// I just recommend just go through all the string method  once on a mdn docs
// it will help you to gain some sought of confidence in js.

const newString = gameName.substring(0, 5) 
console.log(newString);

const anotherString = gameName.slice(-8, 6) //slice mai ham negative value bhi use kar sakte hai
console.log(anotherString);

const newStringOne = "    Saurabh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim basically extra space ko remove karta hai

const url = "https://saurabhm.in/saurabh%20mishra"
console.log(url.replace("%20","-")) // Replace basically use kiya jata hai value ko replace karne mai

console.log(url.includes("saurabh")); // basically ham is se pata kar sakte hai ki vo keywords hai yeah nhi

console.log(gameName.split('-')); // ye basically separate kar deta hai given value ko array ke format mai