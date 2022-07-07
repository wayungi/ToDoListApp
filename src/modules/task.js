const createTask = (description, completed = false, id) => ({
  description,
  completed,
  isbn: Date.now().toString(),
  id,
});

const clearAllCompleted = () => {
  return null;
}

export {
  createTask,
  clearAllCompleted,
};