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
  const p = document.createElement('p');
  p.textContent = task.description;

  const checkBox = createCheckBox();

  taskBlock.appendChild(checkBox);
  taskBlock.appendChild(p);

  TodoListElement.appendChild(taskBlock);
  return null;
};

const x = (n) => n;

export {
  addActivity,
  x,
};
