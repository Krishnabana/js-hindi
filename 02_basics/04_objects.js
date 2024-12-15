// two ways of initialliaze objects:-
const tinderUser = new Object()   // this is how you initialliaze singleton object
const Tinderuser = {} // it is non singleton both are returning same value but singleton is fast

Tinderuser.id = "123ab"
Tinderuser.email = "abc@gmail.com"
Tinderuser.isLoggedin = false

console.log(Tinderuser);   //accessing the object

// lets understand nested objects andc how to access them

const regularUser = {
    email:"xyz@email.com",
    fullname:{
       userfullname:{
        firstname:"madhav singh",
        lastname:"chouhan"
       }
    }
}

// so in that object three nesting fullname is a nested object than username is a second nested object 
console.log(regularUser.fullname.userfullname.firstname);

// for merging two obj or more than two obj here we using assign() method 
const obj1 = {"a":1,"b":2}
const obj2 = {"c":3,"d":4}

// if we direct push it than it print object inside object like:-
// const obj3 = {obj1,obj2}
// console.log(obj3);    so this is not a right way of assigning objects 

// latest way of assignig is using spread operator like we use in array and assign() method 

const mainobj = Object.assign({},obj1,obj2)  //it takes target and source and return a object
const obj3 = {...obj1, ...obj2}   //majority time spread operator used for assgining

console.log(mainobj);
console.log(obj3);


// if we have to know all the keys or values of any object than we can use:-
console.log(Object.keys(Tinderuser));  //syntax:- Objects.keys(nameofobject) it gives values in array
console.log(Object.values(Tinderuser)); // same for value
console.log(Object.entries(Tinderuser));  //can also heck entries it returns arrays in array for entiries

// now lets understand how to access when objects afe in array or array of objects:-

const users = [
    {
        id:1,
        name:"madhav"

    },
    {
        id:2,
        name:"keshav"
    },
    {
        id:3,
        name:"govinda"
    },
]

console.log(users[0].name);   //because users is array and its 0 index is object so we use (.) dot operator to access object's item


// if we have to know that object has a particular property or not than we have a method and it returns boolean value:-
console.log(Tinderuser.hasOwnProperty('isLoggedin'));