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

const populateHtmlList = (elem, f) => {
  tasks.forEach((task) => f(elem, task));
  return null;
};

const getTasks = () => tasks;

export {
  populateHtmlList,
  getTasks,
};