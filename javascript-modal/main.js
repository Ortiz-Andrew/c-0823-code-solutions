const $modal = document.querySelector('.modal');
const $buttonOpen = document.querySelector('.button-open');
const $buttonClose = document.querySelector('.button-close');

$buttonOpen.addEventListener('click', openModal);
$buttonClose.addEventListener('click', closedModal);

function openModal(event) {
  $modal.className = 'modal';
}
function closedModal(event) {
  $modal.className = 'modal hidden';
}
