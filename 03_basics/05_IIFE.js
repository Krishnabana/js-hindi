// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. global vaiable is not polluted.

// the syntax of IIFE is:-

(function () {
    let message = "Hello, IIFE!";
    console.log(message);
})();      // the semicolon is necessary to end the IIFE.

// IIFE can also take parameters. we can also make arrow function as IIFE.

( () =>{
    console.log( "Hello, IIFE!");
})();

// can also take arguments and return values.

let result = (function (a, b) {
    return a + b;
})(3, 5);

// now in arrow function see how it takes arguments 
( (name) =>{
    console.log( `Hello, ${name}!`)
})("krishanpal")
