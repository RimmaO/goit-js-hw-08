import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'form-data';
const formRef = document.querySelector('form');

const emailRef = document.querySelector('#email');
const clearBtnRef = document.querySelector('#clear');

const formData = {};

statusOfStorage();
// 1.Для збереження даних у localStorage використовуйте ключ "form-data".
// 4.При надсиланні форми дані повинні бути збережені в localStorage.
// отримуєм значення поля та зберігаєм дані в localStorage та добавляєм тротл - щоб сховище оновлювалось не частіше, ніж раз на 1секунду
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
formRef.addEventListener('input', throttle(onFormInput, 1000));

// 2.Для валідації поля "Адреса електронної пошти" використовуйте регулярний вираз.
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
emailRef.addEventListener('blur', function () {
  if (!emailRegex.test(emailRef.value)) {
    emailRef.setCustomValidity('Please write valid email');
  } else {
    emailRef.setCustomValidity('');
  }
});

// 3.При завантаженні сторінки, якщо дані є в localStorage, вони мають бути автоматично заповнені у форму.
function statusOfStorage() {
  const formDataSavedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (formDataSavedText) {
    formData.firstName = formDataSavedText.firstName;
    formData.lastName = formDataSavedText.lastName;
    formData.email = formDataSavedText.email;
    formData.phone = formDataSavedText.phone;
    formRef.firstName.value = formData.firstName;
    formRef.lastName.value = formData.lastName;
    formRef.email.value = formData.email;
    formRef.phone.value = formData.phone;
  }
}

// 5.Додайте перевірку заповнення всіх полів форми перед збереженням в localStorage.
// перевірка на заповненість ВСІХ полів відправка форми: очищаєм форму та очищаєм сховище

function onFormSubmit(event) {
  event.preventDefaut();
  if (
    !formRef.firstName.value ||
    !formRef.lastName.value ||
    !formRef.email.value ||
    !formRef.phone.value
  ) {
    return alert('Please fill all');
  }
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(formData);
}
formRef.addEventListener('submit', onFormSubmit);

// 6.Додайте функціональність очищення даних із localStorage при натисканні на кнопку "Очистити".

clearBtnRef.addEventListener('click', function () {
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formRef.reset();
});
