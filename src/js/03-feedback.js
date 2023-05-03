import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const submitRef = document.querySelector('button');

const LOCALSTORAGE_KEY = 'feedback-form-state';

// updateFields();

// function updateFields() {
//   formRef.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
