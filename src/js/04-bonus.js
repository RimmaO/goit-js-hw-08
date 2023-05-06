import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'form-data';
const formRef = document.querySelector('form');
const inputsRef = document.querySelectorAll('input');

const formData = {};

// отримуєм значення поля та зберігаєм дані в localStorage та добавляєм тротл - щоб сховище оновлювалось не частіше, ніж раз на 1секунду
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formData));
}
formRef.addEventListener('input', throttle(onFormInput, 1000));

// перевірка на заповненість ВСІХ полів відправка форми: очищаєм форму та очищаєм сховище
function onFormSubmit(event) {
  event.preventDefaut();
  if (!inputsRef.value) {
    return alert('Please fill all');
  }
  event.target.reset();
  localStorage.removeItem('LOCALSTORAGE_KEY');
  console.log(formData);
}
formRef.addEventListener('submit', onFormSubmit);
