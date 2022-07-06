let tasks = [
  {
    description: 'Wash dishes',
    completed: false,
    isbn: '1657136930628',
    id: 1,
  },
  {
    description: 'Complete to do list App',
    completed: false,
    isbn: '1657136952100',
    id: 2,
  },
  {
    description: 'Take a walk for 2 hours',
    completed: false,
    isbn: '1657137266964',
    id: 3,
  },
  {
    description: 'Light the candle',
    completed: false,
    isbn: '1657137296252',
    id: 4,
  },
];

const getTasks = () => tasks;

const addTask = (task) => tasks.push(task);

const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id.toString() !== id);
  return tasks;
};

const updateIndex = (id) => {
  let startIndex = +id;
  for (let i = startIndex - 1; i < tasks.length; i += 1) {
    tasks[i].id = startIndex;
    startIndex += 1;
  }
  console.log(tasks);
  return null;
};

export {
  addTask,
  getTasks,
  removeTask,
  updateIndex,
};