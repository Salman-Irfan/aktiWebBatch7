const number = document.getElementById("number")

const button = document.getElementById("button")

const numberForm = document.getElementById("numberForm")

const displayResult = document.getElementById("displayResult")
// event listensers

// click, page load, page reload, key press event, form submit event


// button.addEventListener("submit", ()=>{
//     console.log(`button clicked`)
// } )

let winningNumber = 70

numberForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    let parsedNumber = parseInt(number.value)
    
    if(parsedNumber === winningNumber){
        displayResult.innerHTML = `
            <h1>You Won</h1>
        `
    }
    else if (parsedNumber < winningNumber){
        displayResult.innerHTML = `
            <h1>smaller</h1>
        `
    }else if (parsedNumber > winningNumber){
        displayResult.innerHTML = `
            <h1>greater</h1>
        `
    }
})