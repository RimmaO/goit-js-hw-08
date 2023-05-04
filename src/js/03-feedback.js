import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

const formData = {};

statusOfStorage();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

//* отримуєм значення поля зберігаєм значення поля в сховище та добавляєм тротл
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formData));
}

//* відправка форми:очищаєм форму та очищаєм сховище
function onFormSubmit(event) {
  event.preventDefault();
  if (inputRef.value === '' || textareaRef.value === '') {
    return alert('Please fill in all the fields');
  }

  event.target.reset();
  localStorage.removeItem('LOCALSTORAGE_KEY');
  console.log(formData);
}

//* відстежуєм значення в формі, якщо стор була перезавантажена, і якщо там щось було то збережемо в формі, якщо ні - null (Метод Object.entries(obj) повертає масив записів, кожен елемент якого, буде ще один масив з 2-х елементів: імені властивості і значення цієї властивості з об'єкта obj.)
function statusOfStorage() {
  const formDataSavedText = JSON.parse(
    localStorage.getItem('LOCALSTORAGE_KEY')
  );

  if (formDataSavedText) {
    Object.entries(formDataSavedText).forEach(function ([name, value]) {
      formData[name] = value;
      formRef.elements[name].value = value;
    });
  }
}
