const number = document.getElementById("number")

const button = document.getElementById("button")

const numberForm = document.getElementById("numberForm")

const displayResult = document.getElementById("displayResult")
// event listensers

// click, page load, page reload, key press event, form submit event


// button.addEventListener("submit", ()=>{
//     console.log(`button clicked`)
// } )

let anyNumber =  Math.random()*100
console.log(anyNumber)
console.log(Math.floor(anyNumber))

let winningNumber = Math.floor(anyNumber)

let count = 1



numberForm.addEventListener("submit", (event)=>{

    event.preventDefault()
    let parsedNumber = parseInt(number.value)
    
    if(parsedNumber === winningNumber){
        displayResult.innerHTML = `
            <h1>You Won ${count} </h1>
        `
    }
    else if (parsedNumber < winningNumber){
        displayResult.innerHTML = `
            <h1>smaller</h1>
            <p>Tries: ${count}</p>
        `
        count++
    }else if (parsedNumber > winningNumber){
        displayResult.innerHTML = `
            <h1>greater</h1>
            <p>Tries: ${count}</p>
        `
        count++
    }
})


displayText() // khatry ki ghanti

function displayText (){
    console.log(`display text`)
}



// displayTwo() // error
const displayTwo = () => {
    console.log(`arrow display`)
}



const admissionStatus = (userMarks) => {
    if(userMarks >= 950){
        if(userMarks >=951 && userMarks <= 1000){
            return `electrical`
        }
        return true
    }else {
        return false
    }
}


let harronStatus = admissionStatus(850)
console.log(harronStatus)

let abubakarStatus = admissionStatus(990)


if(harronStatus === true){
    console.log(`harron is eleigible to apply`)
}else{
    console.log(`harron is not eleigible to apply`)
}