import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onSaveData, 500));
formEl.addEventListener('submit', onSubmitForm);

updateInput();

function onSaveData(evt) {
  evt.preventDefault();

  const formData = evt.currentTarget.elements;
  const email = formData.email.value;
  const message = formData.message.value;

  const valueElements = { email, message };
  const valueStorage = JSON.stringify(valueElements);

  localStorage.setItem(LOCALSTORAGE_KEY, valueStorage);
}

function onSubmitForm(evt) {
  evt.preventDefault();

  const formData = evt.currentTarget.elements;
  const email = formData.email.value;
  const message = formData.message.value;

  const valueElements = { email, message };

  localStorage.removeItem(LOCALSTORAGE_KEY);

  formEl.reset();
}

function updateInput() {
  if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
    return;
  }
  const chekInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  formEl.elements.email.value = chekInput.email;
  formEl.elements.message.value = chekInput.message;
}
