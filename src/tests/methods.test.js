import { removeTask, addTask, getTasks } from '../modules/methods.js';

describe('addtask', () => {
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

  test('Should add 1 task', () => {
    // Act
    addTask(task1);

    //  Assert
    expect(getTasks().length).toEqual(1);
  });

  test('Should add 2 task', () => {
    // Act
    addTask(task2);
    addTask(task3);

    //  Assert
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
    removeTask('1657742044936')

    //  Assert
    expect(getTasks().length).toEqual(1);
  });
});
