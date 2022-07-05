import './style.css';
import { populateHtmlList } from './modules/tasks';
import { addActivity } from './ui';

const todoList = document.getElementById('todo_list');

document.addEventListener('DOMContentLoaded', () => {
  populateHtmlList(addActivity, todoList);
  return null;
});
