const createTask = (description, completed = false, index) => ({
  description,
  completed,
  index,
});

const test = (x) => x;

export {
  createTask,
  test,
};