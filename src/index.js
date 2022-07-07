import './style.css';
import {
  addTask,
  getTasks,
  removeTask,
  updateIndex,
} from './modules/tasks.js';
import { addActivity } from './modules/ui.js';
import { createTask } from './modules/task.js';

const todoList = document.getElementById('todo_list');
const form = document.getElementById('task_form');
const formInput = document.getElementById('task_input_field');

// popultate the app with tasks
document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasks();
  tasks.forEach((task) => addActivity(todoList, task));
});

form.addEventListener('submit', () => {
  const userInput = formInput.value;
  const task = createTask(userInput, false, `${(getTasks().length + 1)}`);
  addTask(task);
  addActivity(todoList, task);
  document.getElementById('task_input_field').value = '';
});

// listen for clicks on delete buttons
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    const taskBlock = e.target.parentElement.parentElement;
    taskBlock.remove(); // remove task_block element
    const indexOfTask = removeTask(taskBlock.id); // isbn
    updateIndex(indexOfTask);
  }
});