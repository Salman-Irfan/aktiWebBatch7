const headingFromJs = document.getElementById("headingFromJs")
headingFromJs.innerHTML = `
    <p>heading changed through JS at client side</p>
    <p>honda civic 1.6 vti orel 104HP</p>
    <p>17 inches alloy rims ductails spoiler</p>
`


// port 5500
// front end, pk america data axios
// axios use apny comp ki kisi prt sy data nhi la skta?

const getApiResponse = await axios.get(`http://localhost:3000/get-json`)
console.log(getApiResponse)
