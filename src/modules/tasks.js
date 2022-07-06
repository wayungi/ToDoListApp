const tasks = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete to do list App',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a walk for 2 hours',
    completed: false,
    index: 2,
  },
];

const getTasks = () => tasks;

const addTask = (task) => tasks.push(task);

const removeTask = (index) => tasks.splice(index, 1);

export {
  addTask,
  getTasks,
  removeTask,
};