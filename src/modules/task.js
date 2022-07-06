const createTask = (description, completed = false, id) => ({
  description,
  completed,
  id,
});

const test = (x) => x;

export {
  createTask,
  test,
};