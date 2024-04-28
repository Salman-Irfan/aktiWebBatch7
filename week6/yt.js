import { videos } from "../store/videos.js"

const displayVideos = document.getElementById("displayVideos")

let storeLoopHtml = ""

for (let i in videos) {
    console.log(videos[i])
    storeLoopHtml += videos[i].title
    storeLoopHtml += videos[i].channelName
    storeLoopHtml += videos[i].uploadTime
}

displayVideos.innerHTML = storeLoopHtml

// arr push, pop, shift, unshift, slice, splice, map
