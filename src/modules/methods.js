let tasks = [];

const getTasks = () => tasks;

const addTask = (task) => tasks.push(task);

const removeTask = (isbn) => {
  const task = tasks.find((task) => task.isbn === isbn);
  const indexOfTask = tasks.indexOf(task);
  tasks = tasks.filter((task) => task.isbn.toString() !== isbn);
  return indexOfTask;
};

const updateIndex = (index) => {
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].id = i + 1;
  }
  return null;
};

const updateTask = (editedValue, isbn) => {
  const task = tasks.find((task) => task.isbn === isbn);
  const indexOfTask = tasks.indexOf(task);
  tasks[indexOfTask].description = editedValue;
  return task;
};

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const clearCompleted = () => {
  tasks = tasks.filter((task) => task.completed === false);
  return tasks;
};

const clearArray = () => tasks.splice(0, tasks.length);

const updateTasks = () => {
  tasks = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
};

export {
  addTask,
  getTasks,
  removeTask,
  updateIndex,
  updateTask,
  updateLocalStorage,
  clearCompleted,
  clearArray,
  updateTasks,
};
