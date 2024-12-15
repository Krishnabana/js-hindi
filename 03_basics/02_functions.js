// fucntions with objects and array 

function calculatecartprice(num1){
    return num1
}

// console.log(calculatecartprice(200));

// suppose if we don't know how many arguments has to come in fucntion like shopping cart we don't know 
// that how many shoping does a user want to
// so for that in js a rest operator is used it is same as spread opreator but both used in diffrent se cases


function calccartprice(...num1){
    return num1;
}

console.log(calccartprice(200,300,400,500,600));  //it binds all values in an array

// now how to pass a object in a function

const user = {
    username:"murari",
    id:456
}

function handleobject(anyobject){
    console.log(`the name of user is ${anyobject.username} and id is ${anyobject.id} `); 
}

// two ways of passing object in a function like:-
// 1:-
// handleobject(user);  

// 2:- 
// can also pass object in function like :-
handleobject(
    {
        username:"madhav",
        id:566
    }
)

// same for array we can also passarray in a fucntion and accessits values same as objects like:-

const myarr = [400,500,600,800,1000]

function reutrnsecondvalue(getarr){
    return getarr[1]
}

// now in arr also we can pass it in function by two ways same like objets:-
// 1:-
// console.log(reutrnsecondvalue(myarr));

// 2:-
console.log(reutrnsecondvalue([400,500,600,800,1000]));
