import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const emailInput = document.querySelector(`input`);
const textareaInput = document.querySelector(`textarea`);

form.addEventListener(`input`, throttle(onFormInput, 500));
form.addEventListener(`submit`, onFormSubmit);
if (localStorage.getItem('feedback-form-state')) {
  currentInputValues();
}
const objValues = JSON.parse(localStorage.getItem('feedback-form-state'));


function onFormInput(event) {
  
  
  objValues[event.target.name] = event.target.value;
  // const { elements: { email, message } } = event.currentTarget

  // const objValues = {
  //     email: email.value,
  //     message: message.value,
  // }
  localStorage.setItem('feedback-form-state', JSON.stringify(objValues));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  const savesData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(savesData);
  localStorage.removeItem('feedback-form-state');
}

function currentInputValues() {
  const savesData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savesData) {
    const { email, message } = savesData;
    emailInput.value = email? email: ``;
    textareaInput.value = message? message: ``;
  }
}
