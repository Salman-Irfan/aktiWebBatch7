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