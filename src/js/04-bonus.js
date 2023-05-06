import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'form-data';
const formRef = document.querySelector('form');
const inputsRef = document.querySelectorAll('input');

const formData = {};
statusOfStorage();
// 1.Для збереження даних у localStorage використовуйте ключ "form-data".
// 4.При надсиланні форми дані повинні бути збережені в localStorage.
// отримуєм значення поля та зберігаєм дані в localStorage та добавляєм тротл - щоб сховище оновлювалось не частіше, ніж раз на 1секунду
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formData));
}
formRef.addEventListener('input', throttle(onFormInput, 1000));

// 2.Для валідації поля "Адреса електронної пошти" використовуйте регулярний вираз.

// 3.При завантаженні сторінки, якщо дані є в localStorage, вони мають бути автоматично заповнені у форму.
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
// 5.Додайте перевірку заповнення всіх полів форми перед збереженням в localStorage.
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

// 6.Додайте функціональність очищення даних із localStorage при натисканні на кнопку "Очистити".
