let arrOfCourses = ["itc","pf", "oop","dsa", "dbms", "se", "app dev", "ml", "fyp"]
console.log(arrOfCourses)

// push array method
// arrOfCourses.push("kuch bhi")
// console.log(arrOfCourses)

// // pop
// arrOfCourses.pop()
// console.log(arrOfCourses)

// // start wala niklana ho
// arrOfCourses.shift()
// console.log(arrOfCourses)

// // start mei add krna ho, unshift
// arrOfCourses.unshift("itc")
// console.log(arrOfCourses)

// remove from custom range
arrOfCourses.splice(0, 1, "dld", "asd" )
console.log(arrOfCourses)
const selectedCourses = arrOfCourses.slice(2,6)
console.log(selectedCourses)

// how to get the deleted item
let mjyKyuNikala = arrOfCourses.pop()
console.log(mjyKyuNikala)