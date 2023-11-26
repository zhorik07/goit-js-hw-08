const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener(
  'input',
  throttle(handlerObject, 500, { leading: true, trailing: true })
);

function handlerObject(evt) {
  const objForm = {
    userEmail: email.value,
    userMessage: message.value,
  };
  if (evt.target.name === 'email') {
    objForm.userEmail = evt.target.value;
  }
  if (evt.target.name === 'message') {
    objForm.userMessage = evt.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}

const localText = JSON.parse(localStorage.getItem('feedback-form-state'));
if (localText) {
  autoText(localText);
}

function autoText(objText) {
  const { userEmail, userMessage } = objText;
  email.value = userEmail;
  message.value = userMessage;
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const lastLog = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(lastLog);

  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}

