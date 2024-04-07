// 1 se 10
// for (let i = 0;  i <= 10; i++) {
//     console.log(i)
// }


// conditional loop
let targetNumber = 10
console.log(targetNumber)

let numberToBeChecked = 2
console.log(numberToBeChecked)


while (numberToBeChecked <= targetNumber) {
    console.log(numberToBeChecked)
    numberToBeChecked++
}

// number guessing game:
const num = document.getElementById("num")

const numberForm = document.getElementById("numberForm")

numberForm.addEventListener("submit", ()=> {
    console.log(`form submit hua`)
})

let userName = "salman"
console.log(userName)

console.log(userName[0]) // string indexing
console.log(userName[1])
console.log(userName[2])
console.log(userName[3])
console.log(userName[4])
console.log(userName[5])

console.log(userName.length)

for (let i = 0; i <userName.length; i++){
    console.log(userName[i])
}

let anotherUser = "alaa"

for (let i = 0; i < anotherUser.length; i++){
    if (i == 2){
        console.log(anotherUser[i])
        if(anotherUser[i] == "i"){
            console.log(`user entered his name with "I`)
        } else if (anotherUser[i] == "y") {
            console.log(`user entered his name y`)
        }else{
            console.log(`na ap ne i lika hai or na e ap ne y lika hai`)
        }
    }
}



let anyData = `1234` // string

let anyData2 = 1234 // number

// parseInt

let strToNum = parseInt(anyData)
console.log(typeof(strToNum))


let numToStr = anyData2.toString()
console.log(typeof(numToStr))


let firstName = "salman"
let lastName = `irfan`

let completeName = `${firstName} ${lastName}`
console.log(completeName)