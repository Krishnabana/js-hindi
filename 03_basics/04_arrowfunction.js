// this keyword and arrow function 
// there are three multiple ways to declare a function mainly three ways are there as follows;-
// 1st way:-
// function chai(){
//     const username = "madhav"
//     console.log(this.username);
// }
// chai()

// 2nd way:-
// const chai = function() {
//     let username = "madhav"
//     console.log(this.username);
// }

// chai()

// 3rd way:-
// this is called arrow function
const chai = () => {
    let username = "madhav"
    console.log(this.username);
}

chai()