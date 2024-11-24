const myarr = [1,2,3,4,5,6]
console.log(myarr[0]);

// we can also define it as:-
const newarr = new Array(5,6,7,8)
// console.log(newarr);
// methods that Arrayy offered:-
newarr.push(9)
newarr.push(10)
console.log(newarr);
// pop() method for removing element
newarr.pop()
console.log(newarr);
// like push() and pop() there is method like shift() and unshift() but the diffrence is unshift() 
// adding elements from start and shift all element to one shift right and shift() remove from front
newarr.unshift(10)
newarr.unshift(11)
console.log(newarr);
newarr.shift()
console.log(newarr);
// there is method :- includes() it eturns true or false acc to condition 
console.log(newarr.includes(11));
// to find out index of any element there is method called indexOf() if element is not found then it returns -1
console.log(newarr.indexOf(9))

//join() method is used to join the array and return in the form of string:-
const firstarr = newarr.join()
console.log(newarr);
console.log(firstarr);
console.log(typeof firstarr);

//slice() and splice() they both returns a section of array but the diffrence is splice() manipulates the original array
// means it remove the section from array which it prints
const secondarr = newarr.slice(0,3)  //last range excluded
console.log(newarr); //main arr
console.log(secondarr); //slice() method vala
const thirdarr = myarr.splice(0,2)
console.log(thirdarr); // splice() vala
console.log(newarr);  //main arr ko change kar diya splice() method ne






 


