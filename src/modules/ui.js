const deleteActivity = (taskBlockId) => {
  const taskBlock = document.getElementById(taskBlockId);
  taskBlock.remove();
  return taskBlock;
};

const createCheckBox = (checkboxState) => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('cb');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check_box');
  checkbox.checked = checkboxState;
  return checkbox;
};

const createTrashIcon = () => {
  const trash = document.createElement('i');
  trash.classList.add('fa-solid', 'fa-trash');
  trash.classList.add('hidden');
  return trash;
};

const textField = (description) => {
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'description');
  textInput.setAttribute('readonly', 'readonly');
  textInput.classList.add('uneditable');
  textInput.value = description;

  textInput.addEventListener('dblclick', (e) => {
    e.target.removeAttribute('readonly');
    e.target.classList.remove('uneditable');
  });

  return textInput;
};

const addActivity = (TodoListElement, task) => {
  const taskBlock = document.createElement('div');
  taskBlock.classList.add('task_block');
  taskBlock.setAttribute('id', task.isbn);

  // div to group checkbox & description
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('cb_desc', 'flex-row');

  const textInput = textField(task.description);
  const checkBox = createCheckBox(task.completed);

  if (task.completed) {
    textInput.classList.add('strike');
  }

  itemGroup.appendChild(checkBox);
  itemGroup.appendChild(textInput);

  taskBlock.appendChild(itemGroup);
  taskBlock.appendChild(createTrashIcon());

  TodoListElement.appendChild(taskBlock);
  return null;
};

export { addActivity, deleteActivity };
