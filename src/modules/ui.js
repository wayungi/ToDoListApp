const createCheckBox = () => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('cb');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check_box');
  /*
    TODO: add event listener here
  */
  return checkbox;
};

const addActivity = (TodoListElement, task) => {
  const taskBlock = document.createElement('div');
  taskBlock.classList.add('task_block');

  // more icon holder dive
  const dots = document.createElement('div');
  dots.classList.add('more');
  dots.textContent = 'w';

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

const x = (n) => n;

export {
  addActivity,
  x,
};
