import {
  removeTask,
  updateIndex,
} from './tasks.js';

const deleteActivity = (taskBlockId) => {
  const taskBlock = document.getElementById(taskBlockId);
  taskBlock.remove();
  return taskBlock;
};

const createCheckBox = () => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('cb');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check_box');
  return checkbox;
};

const createIcon = () => {
  const groupDiv = document.createElement('div');
  const ellipsis = document.createElement('i');
  ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');
  ellipsis.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    e.target.nextElementSibling.classList.remove('hidden');
  });
  const trash = document.createElement('i');
  trash.classList.add('fa-solid', 'fa-trash');
  trash.addEventListener('click', (e) => {
    removeTask(e.target.parentElement.parentElement.id);
    deleteActivity(e.target.parentElement.parentElement.id);
    updateIndex(e.target.parentElement.parentElement.id);
  });
  trash.classList.add('hidden');

  groupDiv.append(ellipsis);
  groupDiv.appendChild(trash);

  return groupDiv;
};

const addActivity = (TodoListElement, task) => {
  const taskBlock = document.createElement('div');
  taskBlock.classList.add('task_block');
  taskBlock.setAttribute('id', task.id);
  // more icon holder dive
  const dots = createIcon();
  dots.classList.add('more');

  // div to group checkbox & description
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('cb_desc', 'flex-row');

  const p = document.createElement('p');
  p.textContent = task.description;
  const checkBox = createCheckBox();

  itemGroup.appendChild(checkBox);
  itemGroup.appendChild(p);

  taskBlock.appendChild(itemGroup);
  taskBlock.appendChild(dots);

  TodoListElement.appendChild(taskBlock);
  return null;
};

export {
  addActivity,
  deleteActivity,
};
