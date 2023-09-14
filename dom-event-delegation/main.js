const $taskList = document.querySelector('.task-list');

function task(event) {
  const $clickElement = event.target;

  if ($clickElement.tagName === 'BUTTON') {
    const $taskListItem = $clickElement.closest('.task-list-item');

    console.log('task-list-item:', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', task);
