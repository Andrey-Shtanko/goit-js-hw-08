import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`)

form.addEventListener(`input`, onFormInput)
form.addEventListener(`submit`, onFormSubmit)

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
}