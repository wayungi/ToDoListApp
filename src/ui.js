const createCheckBox = () => {
  const checkBox = document.createElement('checkbox');
  checkBox.classList.add('cb');
  /*
    TODO: add event listener here
  */
  return checkBox;
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
