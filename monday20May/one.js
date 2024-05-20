// const response = await axios.get(`http://localhost:8000/dummy-get-request`)
// console.log(response)

const getDummyApiResponse = async () => {
    const response = await axios.get(`http://localhost:8000/dummy-get-request`)
    console.log(response)
}

getDummyApiResponse()

console.log(`any code after waiting the axios network call`) // dekna ye hai k ye line pehle print hoti hai ya bad mei print hti hai, or hona bhi pehle chahiye