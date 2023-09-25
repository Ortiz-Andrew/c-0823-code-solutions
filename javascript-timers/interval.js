const $countdown = document.querySelector('h1');
let count = 4;
function updateCountdown() {
  if (count > 1) {
    $countdown.textContent = count - 1;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownNum);
  }
  count--;
}
const countdownNum = setInterval(updateCountdown, 1000);
