// intervalHandler
const handleInterval = () => {
    console.log(`run interval`)
}

// setInterval(handleInterval, 1000);

let originalTitle = document.title
console.log(originalTitle)

let changedTitle = `some one message you`
document.title = changedTitle

const handleOriginalTitle = () => {
    document.title = originalTitle
}

const handleChangedTitle = () => {
    document.title = changedTitle
}

setInterval(handleOriginalTitle, 1000);

setInterval(handleChangedTitle, 1700)

let messages = ["abc", "sdf", "def"]
let oldCount = messages.length // 3
messages.push("qwe", "ghj")
let newCount = messages.length // 4

let showNotifNum = newCount - oldCount // 5-3 =2
if (newCount > oldCount) {
    showNotifNum = newCount - oldCount // 5-3 =2
}

const showNotif = document.getElementById("num").innerHTML = showNotifNum


notidBtn.addEventListener ("click", () =>{
    document.getElementById("num").innerHTML = ""
})