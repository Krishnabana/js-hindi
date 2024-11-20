/* 1. primitive type:-
 in primitive type this uses stack memory and gives us a copy of the varaible.

 2. but in non-primitive type they uses heap memory and gives us refrence to original varaible memory
    so any change we made on refrenced variable it directly changes the main varaible. */

//  example of primtive and stack memory allocation
let channelName = "Beerbiceps"

let secondchannel = "Ranveerallahbadia"
secondchannel = "nitish rajput"
console.log(channelName);
console.log(secondchannel);

// eample of non-primitive and heap memory allocation in this when we change dependent vairable than 
// due to refrence to main vairable it changed the main varaible also

let myYoutube = {
    email:"kp@gmail.com",
    upi:"krishna@ybl"
}

let nitishYoutube = myYoutube

nitishYoutube.email = "nitish@gmail.com"

console.log(myYoutube.email);
console.log(nitishYoutube.email);



