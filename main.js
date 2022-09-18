const email = document.querySelector('input');
const form = document.querySelector('form');
const msg = document.querySelector('.msg');
const iconError = document.querySelector('.icon-error');

form.onsubmit = (e) => {
  e.preventDefault();
  // Constraint validation API
  let validationMessage = email.validationMessage || 'Please provide a valid email';
  let isValid = email.validity.valid && email.value.length !== 0;
  showMessage(isValid, validationMessage);
}

const showMessage = (isValid, text) => {
  if (isValid) {
    msg.style.display = 'none';
    iconError.style.display = 'none';
  } else {
    msg.textContent = text;
    msg.style.display = 'block';
    iconError.style.display = 'block';
  }
}

email.onfocus = () => {
  msg.style.display = 'none';
  iconError.style.display = 'none';
}
