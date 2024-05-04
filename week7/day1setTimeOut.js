console.log(`first`)

const turnSecIntoMin = (ms) => {
    return ms*60 // calc mistake
} 

let min = turnSecIntoMin(2000)

let hour = (min) => {
    return min*60
}

setTimeout(() => {
    console.log(`set time out func executed after 5 s`)
}, 5000 );


setTimeout(() => {
    document.getElementById("welcome").innerHTML = "welcome"
}, 5000 );

setTimeout(() => {
    // document.getElementById("welcome").style.color = "red"
}, 4000 );



// more complex logic, jo le rhi 10 sec
console.log(1+2*3/4%5*3673478+8734)

