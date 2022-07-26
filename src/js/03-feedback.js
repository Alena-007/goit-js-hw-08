import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(onSaveData, 500));
formEl.addEventListener('submit', onSubmitForm);

updateInput();

function onSaveData(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  const valueStorage = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, valueStorage);
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formEl.reset();
}

function updateInput() {
  let chekInput = localStorage.getItem(LOCALSTORAGE_KEY);

  if (chekInput) {
    chekInput = JSON.parse(chekInput);
    Object.entries(chekInput).forEach(([name, value]) => {
      formData[name] = value;
      formEl.elements[name].value = value;
    });
  }
}
