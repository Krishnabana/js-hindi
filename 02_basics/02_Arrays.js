const desi_heroes = ["shaktimaan","sonapari","krish"]
const marvel_heroes = ["Ironman","Thor","Hulk"]

// we have push method in arrays it push all data types in array it treats array also same
// desi_heroes.push(marvel_heroes)  //here it push marvel_heroes as an one element
// console.log(desi_heroes);

// best wa of concat two arrays is using concat() method
const all_heroes = desi_heroes.concat(marvel_heroes)
console.log(all_heroes);

// we can also concat using spread opertor using this wespread morethan two arrays

const all_new_heroes = [...desi_heroes,...marvel_heroes]
console.log(all_new_heroes);

// if there is nested arrays like arrays in array and we want all in one array so we can use flat() for that
// and if we give flat(Infinity) than automatically it takes the depth of the nested arrays

const another_heroes = [1,2,[3,4],5,[6,7]]
const one_heroes = another_heroes.flat(Infinity)
console.log(one_heroes);

// for checking if the object is array or not The Allows mapping and transformation of the array elements:-
console.log(Array.isArray("krishanpal"));
console.log(Array.from("krishanpal"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// Array.of() - The Accepts any number of the arguments treating each as an element