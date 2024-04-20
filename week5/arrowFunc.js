
// no input no return
const arrowFunc = () => {
    console.log(`arrow func made`)
}

// function call
arrowFunc()

arrowFunc()



// no input, but with return

const arrowWithReturn = () => {
    return (`function with return`)
}
arrowWithReturn()

console.log(`any string`)
let str1 = `any string`

let returnAns = arrowWithReturn()
console.log(returnAns)


const addFunc = (num1, num2) => {
    console.log(num1)
    console.log(num2)
    return (num1+num2)
}

let addAns1 = addFunc(2,3)
console.log(addAns1)

let addAns2 = addFunc(50,32)
console.log(addAns2)



// normal function
function mulNormalFunction (num1, num2) {
    return (num1*num2)
} 

let mulAns = mulNormalFunction(34,2)
console.log(mulAns)