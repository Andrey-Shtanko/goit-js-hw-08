import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`)
const emailInput = document.querySelector(`input`)
const textareaInput = document.querySelector(`textarea`)

form.addEventListener(`input`, onFormInput)
form.addEventListener(`submit`, onFormSubmit)
currentInputValues()

function onFormInput (event) {
    const { elements: { email, message } } = event.currentTarget
    
    const objValues = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(objValues))
}



function onFormSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    const savesData = JSON.parse(localStorage.getItem("feedback-form-state"))
    console.log(savesData);
    localStorage.removeItem("feedback-form-state")
}


function currentInputValues() {
    const savesData = JSON.parse(localStorage.getItem("feedback-form-state"))

    if (savesData) {
        const { email, message } = savesData
        emailInput.value = email
        textareaInput.value = message
    }
    
}