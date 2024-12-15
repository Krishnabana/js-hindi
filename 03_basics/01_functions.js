// functons are same in every language 
// syntax in js is as follows:-
// this type of function called void function or doesn't return anything
function addtwonumbers(number1,number2){
    console.log(number1+number2);
}

addtwonumbers(5,10)

// now the return function looks like:-
function sumtwonumbers(a,b){
    return a+b
}

const result = sumtwonumbers(11,5)
console.log(result);

// playing with parameters 

function loginUserMessage(username){
    if(username){
        return `${username} just logged in`
    }
    return `please enter username`
}

console.log(loginUserMessage("madhav"));
