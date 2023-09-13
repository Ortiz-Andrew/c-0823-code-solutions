const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const $nameValue = $contactForm.elements.name.value;
  const $emailValue = $contactForm.elements.email.value;
  const $messageValue = $contactForm.elements.message.value;
  const messageData = {
    name: $nameValue,
    email: $emailValue,
    message: $messageValue,
  };

  $contactForm.reset();

  console.log('messageData:', messageData);
}

$contactForm.addEventListener('submit', handleSubmit);
