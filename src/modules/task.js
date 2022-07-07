const createTask = (description, completed = false, id) => ({
  description,
  completed,
  isbn: Date.now().toString(),
  id,
});

const toggleCompleteStatus = (task, completed) => {
  task.completed = completed;
  return task;
};

export {
  createTask,
  toggleCompleteStatus,
};