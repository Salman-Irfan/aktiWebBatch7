
const video1 = {
    thumbnail: `https://i.ytimg.com/vi/chx9Rs41W6g/maxresdefault.jpg`,
    logo: `https://i.ytimg.com/vi/chx9Rs41W6g/maxresdefault.jpg`,
    title: `this js project will make ypu better programmer`,
    channelName: `Harshit Vashisth`,
    numberOfViews: 29000,
    uploadTime: `3-Jan-2024`
}


const ytVideo = document.getElementById('ytVideo')

ytVideo.innerHTML = `
    <img src="${video1.thumbnail}" alt="image" width="400px" />
    <div>
    
    <img src="${video1.logo}  " alt="image" width="30px" height="30px" style="border-radius: 50%;" />
    ${video1.title}
    </div>
    <p>${video1.channelName}</p>
    <p>${video1.numberOfViews}</p>
    <p>${video1.uploadTime}</p>
`