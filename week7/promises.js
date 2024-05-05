// yt
// fb
// google map
// github 
// chatgpt =? openai api 

// josn place holder
// forms pree api

// const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
// console.log(response)

let displayApiData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response)
    } catch (error) {
        console.log(error.message)
    }
}


displayApiData()


const contactForm = document.getElementById("contactForm")

const handleFormSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form elements
    const emailInput = contactForm.elements["email"];
    const messageTextarea = contactForm.elements["message"];

    const formObj = {
        email: emailInput.value,
        message: messageTextarea.value
    }
    console.log(formObj)

    try {
        const contactApiResponse = await axios.post("https://formspree.io/f/xyyrolea", formObj) 
        console.log(contactApiResponse)
        if (contactApiResponse.data.ok){
            alert(`form submitted successfully`)
        }else{
            alert(`faled`)
        }
    } catch (error) {
        console.log(error.message)
        alert(`internal server error, 500`)
    }
}

contactForm.addEventListener("submit", handleFormSubmit)