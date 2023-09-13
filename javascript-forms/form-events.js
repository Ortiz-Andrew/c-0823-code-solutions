function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);
}

const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $textareaInput = document.querySelector('#user-message');

console.log('name event:', $nameInput.value);
console.log('email event:', $emailInput.value);
console.log('textarea event:', $textareaInput.value);

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('input', handleInput);

$textareaInput.addEventListener('input', handleInput);
$textareaInput.addEventListener('blur', handleBlur);
$textareaInput.addEventListener('focus', handleFocus);
