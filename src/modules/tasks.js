let tasks = [
  {
    description: 'Wash dishes',
    completed: false,
    id: 1,
  },
  {
    description: 'Complete to do list App',
    completed: false,
    id: 2,
  },
  {
    description: 'Take a walk for 2 hours',
    completed: false,
    id: 3,
  },
  {
    description: 'Light the candle',
    completed: false,
    id: 4,
  },
];

const getTasks = () => tasks;

const addTask = (task) => tasks.push(task);

const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id.toString() !== id);
  console.log(tasks);
  return tasks;
};

const updateIndex = (startIndex) => {
  for (let i = startIndex - 1; i < tasks.length; i += 1) {
    tasks[i].index = startIndex.toString();
    startIndex += 1;
  }
  return null;
};

export {
  addTask,
  getTasks,
  removeTask,
  updateIndex,
};