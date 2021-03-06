import './style.css';

import {
  addTask,
  getTasks,
  removeTask,
  updateIndex,
  updateTask,
  updateLocalStorage,
  clearCompleted,
  clearArray,
  updateTasks,
} from './modules/methods.js';
import { addActivity } from './modules/ui.js';
import { createTask, toggleCompleteStatus } from './modules/task.js';

const todoList = document.getElementById('todo_list');
const form = document.getElementById('task_form');
const formInput = document.getElementById('task_input_field');
const clearAllCompleted = document.getElementById('clear_btn');
const refresh = document.getElementById('refresh_div');

// popultate the app with tasks
document.addEventListener('DOMContentLoaded', () => {
  updateTasks();
  const tasks = getTasks();
  tasks.forEach((task) => addActivity(todoList, task));
});

form.addEventListener('submit', () => {
  const userInput = formInput.value;
  const task = createTask(userInput, false, `${getTasks().length + 1}`);
  addActivity(todoList, task);
  addTask(task);
  updateLocalStorage();
  document.getElementById('task_input_field').value = '';
});

// listen for clicks on delete buttons
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    const taskBlock = e.target.parentElement;
    taskBlock.remove(); // remove task_block element
    const indexOfTask = removeTask(taskBlock.id); // isbn
    updateIndex(indexOfTask);
    updateLocalStorage();
  }
});

// listener for 'enter' key and save new value
todoList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const editedValue = e.target.value;
    const isbn = e.target.parentElement.parentElement.id;
    updateTask(editedValue, isbn);
    e.target.setAttribute('readonly', 'readonly');
    e.target.classList.toggle('uneditable');
    updateLocalStorage();
  }
});

// add change event listener to the checkbox
todoList.addEventListener('change', (e) => {
  const completed = e.target.checked; // returns true/false based on checkbox status
  if (completed) {
    e.target.nextElementSibling.classList.add('strike');
  } else {
    e.target.nextElementSibling.classList.remove('strike');
  }
  const isbn = e.target.parentElement.parentElement.id;
  const tasks = getTasks();
  tasks.forEach((task) => {
    if (task.isbn === isbn) {
      toggleCompleteStatus(task, completed);
    }
  });
  updateLocalStorage();
});

// clear all completed event listener
clearAllCompleted.addEventListener('click', () => {
  clearCompleted();
  updateLocalStorage();
  todoList.innerHTML = '';
  getTasks().forEach((task) => addActivity(todoList, task));
});

// remove all elements from array and clear interafce
refresh.addEventListener('click', () => {
  clearArray();
  todoList.innerHTML = '';
  updateLocalStorage();
});
