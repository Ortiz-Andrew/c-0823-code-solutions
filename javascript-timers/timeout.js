const $timeout = document.querySelector('.message');

function update() {
  $timeout.textContent = 'Hello There';
}

setTimeout(update, 2000);
