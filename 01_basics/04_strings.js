const myname = "krishanpal"
const repocount = 50

console.log("Hello i am "+myname+" and my repocount is "+repocount);
// better way to write this and concatinate string:-
console.log((`Hello i am ${myname} and my repocount is ${repocount}`));

// js offered multiple methods for strings 
// we can also define strings like this 
const gamename = new String("Krishna-fc")
// methods like:-

console.log(gamename[0]); //to access oth index
console.log(gamename.length)  //to finding length
console.log(gamename.charAt(0));  //to finding charachter at given index
console.log(gamename.indexOf("r")); //to finding index of any given charachter
console.log(gamename.toUpperCase());  //to convert all the letters in uppercase
const newstring = gamename.substring(0,4)  //to take out the substring which we want from string last index was excluded
console.log(newstring);
console.log(gamename.split("-"))   //split the string on the basis ogf given parameter if it presents
const anotherstring = gamename.slice(-11,4);  //it copy and returns the extracted portion in new string
console.log(anotherstring); //it also supports negative indexing as after last index it starts from first with negative indexing
const firststring = gamename.trim("           krishna        ") // it simply trims the extra spaces from both ends
console.log(firststring) 
const url = "https://www.krishanpalsingh.com/krishna%home"
console.log(url.replace('%','-'));   //it replaces that charachter from second argument
console.log(url.includes("krishna")); //it tells if the argument is present or not in the string






