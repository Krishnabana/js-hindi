// lets understand promises and how to consume the data from it connectionof resolve() and then()
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"krishanpal",email:"krishanpal@gmail.com"})
//     },1000)
// }).then(function(user){
//     console.log(user)
// })


// 2nd way to consume the data from promise using async and await

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"krishanpal",email:"krishanpal@gmail.com"})
        }
        else{
            reject("ERROR: Something went wrong")
       }
    },1000)
})


async function consumePromiseOne(){
    try{
    const response = await promiseOne
     console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseOne()