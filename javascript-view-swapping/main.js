const $container = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    const $data = event.target.getAttribute('data-view');

    for (let i = 0; i < $view.length; i++) {
      if ($data === $view[i].getAttribute('data-view')) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
});
