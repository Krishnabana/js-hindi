// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;  
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const krishna = new User("krishna","krishna@gmail.com","123456")
  //new keyword is used to create a new instance of the class
//   console.log(krishna.encryptPassword());
//   console.log(krishna.changeUsername());

//   behind the scenes if class not then this is how it works using prototype.

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const madhav = new User("madhav","madhav@gmail.com","123456")

console.log(madhav.encryptPassword());
console.log(madhav.changeUsername());
