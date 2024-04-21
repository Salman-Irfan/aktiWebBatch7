import anyThingElse , { roomKey, admissionStatus } from '../libs/admissionLibraries/admissionStatus.js'
console.log(admissionStatus(900))

console.log(roomKey)

console.log(anyThingElse)

let firstName = `salman irfan     `

for (let i =0; i<firstName.length; i++) {
    console.log(firstName[i])
}

if (firstName[firstName.length-1] === ' ') {
    console.log(`space founded at the last`)
    firstName = firstName.trim()
}
console.log(firstName)

