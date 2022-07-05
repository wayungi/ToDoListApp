import './style.css';
import {
  getTasks,
} from './modules/tasks.js';
import { addActivity } from './modules/ui.js';
import Icon from './reviewer_video.png';
import Bin from './bin.png';
import Ellipsis from './ellipsis.png';
import Refresh from './refresh.png';

const todoList = document.getElementById('todo_list');

document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasks();
  tasks.forEach((task) => addActivity(todoList, task));
});
