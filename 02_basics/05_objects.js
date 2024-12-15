// we understand about objects de-structure 
// de-structure means ham kisi bhi object ki property ko rename krke use kr skte hai 
//  mtlb ham use de-structure kr skte hai

const course = {
    coursename:"app development",
    courseinstructor:"madhav sir"
}

// ab agr hme instructor name jan na ho to har baar course.courseinstructor likhna padega
// pr hm object de-structure krke iska name change kr skte hai like:-

const {courseinstructor:instructor} = course
// ab hme jaha bhi courseinstructor likhna ho hm uski jagah instructor likh skte hai
console.log(instructor);

