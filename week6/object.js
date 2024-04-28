const anyObejct = {
    userName: "ansih",
    age:19,
    isWearGlasses: true,
}
console.log(anyObejct)

// console.log(anyObejct.userName)
// console.log(anyObejct.age)
// console.log(anyObejct.isWearGlasses)

// const abuBakarBhai = anyObejct 
// abuBakarBhai.userName = "abu bakar"
// console.log(abuBakarBhai)

// console.log(anyObejct)

const abuBakarObj = {...anyObejct}
console.log(abuBakarObj)
abuBakarObj.userName = "abu bakar"
console.log(abuBakarObj)
console.log(anyObejct)