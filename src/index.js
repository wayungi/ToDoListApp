import './style.css';
import {
  populateHtmlList,
  getTasks,
} from './modules/tasks';
import { addActivity } from './ui';

const todoList = document.getElementById('todo_list');

document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasks();
  tasks.forEach((task) => addActivity(todoList, task));
});
