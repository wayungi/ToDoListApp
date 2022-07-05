import './style.css';
import {
  getTasks,
} from './modules/tasks.js';
import { addActivity } from './modules/ui.js';

const todoList = document.getElementById('todo_list');

document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasks();
  tasks.forEach((task) => addActivity(todoList, task));
});
