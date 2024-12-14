const mysum = Symbol("key1")

const JsUser = {
    name:"krishanpal",
    email:"kpbana@google.com",
    [mysum]:"mykey1",
    location:"ujjain",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"]
}

// now two ways of accesing object element
console.log(JsUser.email);
// by default the key of object is taken as string so we can also access as:-
console.log(JsUser["email"]);
console.log(JsUser[mysum]);
console.log(typeof [mysum]);

JsUser.greeting = function(){
  console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());