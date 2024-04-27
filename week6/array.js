const stuMarks = [70, 80, 50, 261, 283]
console.log(stuMarks)

const mushkilArray = ["haroon", 123, true, 23, "str"]
console.log(mushkilArray)

// array mei kia differnt cheez hui hai
let num1 = 24 // stack, 24
let num2 = 74 // stack, 74

num2 = 54 // stack, 54

num2 = num1 // stack, 24
console.log(num2)


//  array

let arr1 = [1,2,3,4,5] // array indexing
let arr2 = [5,6,7,8,9] // array indexing
console.log(arr2)
arr1[0] // 1, mjy b ittefaq

arr2 = arr1 // 
console.log(arr2)


let abuBakarNote = "c++ achi lang hai"

let anishCopy = abuBakarNote

anishCopy = `js bhi ek achi lang hai`

console.log(abuBakarNote)

// array mushkil banny lagi hai

let abuBakarCourses = ["pf","oop", "dsa"]

let anishArrCopy = abuBakarCourses // ["pf","oop", "dsa"]

anishArrCopy[0] = "adobe photo"

console.log(abuBakarCourses)

// how to clone arrays
let haroonArrCopy = [...abuBakarCourses]

haroonArrCopy[0] = "calculus"
console.log(haroonArrCopy[1]) // oop 
console.log(haroonArrCopy[2]) // oop 

console.log(haroonArrCopy)
console.log(abuBakarCourses)

for (let i =0; i<haroonArrCopy.length; i++){
    console.log(haroonArrCopy[i])
}
// short syntax
for (let i in haroonArrCopy){
    console.log(haroonArrCopy[i])
}

