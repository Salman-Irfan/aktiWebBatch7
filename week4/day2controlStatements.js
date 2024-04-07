// let userAge = 24
// console.log(userAge)

// const eligibleStatus = document.getElementById("eligibleStatus")

// // check
// if (userAge >= 18) {
//     eligibleStatus.innerHTML = `you are eligible to apply`
// } else {
//     eligibleStatus.innerHTML = `you are not eligible to apply`
// }

// let userAge = 2
// let fscMarks = 800
// const eligibleStatus = document.getElementById("eligibleStatus")
// if (userAge >= 18 && fscMarks >= 900) {
//     eligibleStatus.innerHTML = `you are eligible to apply`
// } else {
//     eligibleStatus.innerHTML = `you are not eligible to apply`
// }


// category wise selection
// let userAge = 2
// let fscMarks = 650

// if (userAge >= 18) {
//     // check kro departmenets
//     // 900
//     if (fscMarks >= 900 && fscMarks <= 1000) {
//         console.log(`electrical`)
//     } else if (fscMarks >= 800 && fscMarks <= 899) { // 800
//         console.log(`mechnaical`)
//     } else if (fscMarks >= 700 && fscMarks <= 799) { // 700
//         console.log(`civil`)
//     }
//     else {
//         console.log(`not in merit`)
//     }
// } else {
//     console.log(`you are not eligible to apply`)
// }

// clean but not recommnded writing style of multiple if else / nested if else

let userAge = 2

let fscMarks = 850

if (userAge >= 18) {
    // comp marks
    if (fscMarks >= 900 && fscMarks <= 1000) {
        console.log(`electical`)
    } else {
        if (fscMarks >= 800 && fscMarks <= 899) { // 800
            console.log(`mechanical`)
        } else {
            if (fscMarks >= 700 && fscMarks <= 799) {
                console.log(`civil`)
            }
        }
    }
} else {
    console.log(`not eligible t apply`)
}