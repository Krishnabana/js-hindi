const balance = new Number(100)
console.log(balance.toString());  //toString() method used to change value to a string
console.log(typeof(balance));

//to fixed calued after point 
console.log(balance.toFixed(2))  //so it fixes the value upto 2 digits after decimal

//Math library 

console.log((Math.random()*10)+1); //Math.random is used for generating random number 
console.log(Math.floor(Math.random()*10)+1) // Math.floor gives the small value after decimal means like 4.2is 4 or 4.8 is also 4
console.log(Math.ceil(Math.random()*10)+1) // Math.ceil gives the maximum value after decimal means like 4.2 is 5 or 4.8 is also 5);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min));
