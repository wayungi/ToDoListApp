const createTask = (description, completed = false, id) => ({
  description,
  completed,
  isbn: Date.now().toString(),
  id,
});

const test = (x) => x;

export {
  createTask,
  test,
};