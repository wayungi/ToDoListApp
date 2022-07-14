import {
  removeTask,
  addTask,
  getTasks,
  updateTask,
  clearCompleted,
} from '../modules/methods.js';

import { toggleCompleteStatus } from '../modules/task.js';

describe('Todo list app tests', () => {
  // Arrange
  const task1 = {
    description: 'Play soccer',
    completed: false,
    isbn: '1657742044934',
    id: '1',
  };

  const task2 = {
    description: 'Eat food',
    completed: false,
    isbn: '1657742044935',
    id: '2',
  };

  const task3 = {
    description: 'Take a nap',
    completed: false,
    isbn: '1657742044936',
    id: '3',
  };

  const task4 = {
    description: 'pair program',
    completed: false,
    isbn: '1657742044937',
    id: '4',
  };

  const task5 = {
    description: 'Drink water',
    completed: false,
    isbn: '1657742044938',
    id: '5',
  };

  const task6 = {
    description: 'play tennis',
    completed: false,
    isbn: '1657742044939',
    id: '6',
  };

  describe('addtask', () => {
    test('Should add 1 task', () => {
      // Act
      addTask(task1);

      //  Assert
      expect(getTasks().length).toEqual(1);
      expect(getTasks()[0]).toEqual(task1);
    });

    test('Should add 2 task', () => {
      // Act
      addTask(task2);
      addTask(task3);

      //  Assert
      expect(getTasks()[1]).toEqual(task2);
      expect(getTasks()[2]).toEqual(task3);
      expect(getTasks().length).toEqual(3);
    });
  });

  describe('removeTask', () => {
    // Arrange

    test('Should remove 1 task', () => {
      // Act
      removeTask('1657742044934');

      //  Assert
      expect(getTasks().length).toEqual(2);
    });

    test('Should remove 1 task', () => {
      // Act
      removeTask('1657742044936');

      //  Assert
      expect(getTasks().length).toEqual(1);
    });
  });

  describe('updateTask / edit task', () => {
    test('task 4 description should be Clean the room', () => {
      // Act

      addTask(task4);
      addTask(task5);
      addTask(task6);

      updateTask('Clean the room', '1657742044937');

      expect(getTasks()[1].description).toBe('Clean the room');
    });

    test('task 6 description should be Big balls day', () => {
      // Act

      updateTask('Big balls day', '1657742044939');

      expect(getTasks()[3].description).toBe('Big balls day');
    });
  });

  describe('Update task completed status', () => {
    test('Change task4 completed to true', () => {
      const completedTask = toggleCompleteStatus(task4, true);
      expect(completedTask.completed).toBe(true);
    });

    test('Change task4 completed to false', () => {
      const completedTask = toggleCompleteStatus(task4, false);
      expect(completedTask.completed).toBe(false);
    });

    test('Change task2 completed to true', () => {
      const completedTask = toggleCompleteStatus(task2, true);
      expect(completedTask.completed).toBe(true);
    });

    test('Change task2 completed to false', () => {
      const completedTask = toggleCompleteStatus(task2, false);
      expect(completedTask.completed).toBe(false);
    });
  });
  describe('clear ompleted tasks', () => {
    // act
    test('', () => {
      toggleCompleteStatus(task2, true);
      toggleCompleteStatus(task4, true);
      toggleCompleteStatus(task5, true);
      clearCompleted();
      expect(getTasks().length).toEqual(1);
      expect(getTasks()[0]).toEqual(task6);
    });
  });
});
