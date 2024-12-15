// let,const and var are used for local and globa scope 
// let a = 50
// const b = 60
// var c = 80

// let and const has block scope or local scope the diffrence between both are:
// we can reassign a value or change a value of let but we can't reassign or change the value of const 

// but var has global scope whether it is define in block or global it has global scope so avoid using var

if(true){
    let a = 400
    const b = 500
    var c = 800
}

// console.log(a);  // it gives error a is not defined
// console.log(b);  // it also gives error b is not defined 
console.log(c);  // it not gives error because it has global scope

// so let and const has depends on where they defined or initiallizes if they initiallized in global than they
// have global scope and if they initaialliazed in local than they have local scope.