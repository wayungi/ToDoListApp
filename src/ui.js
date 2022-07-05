const createCheckBox = () => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('cb');
  checkbox.type = 'checkbox';
  checkbox.name = 'name';
  /*
    TODO: add event listener here
  */
  return checkbox;
};

const addActivity = (TodoListElement, task) => {
  const taskBlock = document.createElement('div');
  taskBlock.classList.add('task_block');

  const dots = document.createElement('div');
  dots.classList.add('more');

  // div to group checkbox & description
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('cb_desc');

  const p = document.createElement('p');
  p.textContent = task.description;
  const checkBox = createCheckBox();

  itemGroup.appendChild(checkBox);
  itemGroup.appendChild(p);

  TodoListElement.appendChild(itemGroup);
  TodoListElement.appendChild(dots);
  return null;
};

const x = (n) => n;

export {
  addActivity,
  x,
};
