const storage = {
  COLORS: ['blue', 'orange', 'purple', 'pink'],
  getRandomColor: function() {
    const randomNumber = Math.round(Math.random() * (this.COLORS.length - 1)); 
    return this.COLORS[randomNumber];
  },
  storageAlreadyExist: function() {
    return localStorage.getItem('todo-lists');
  },

  getLists: function() {
    return JSON.parse(localStorage.getItem('todo-lists'));
  },

  getLastItem: function() {
    const lists = this.getLists();
    return lists[lists.length - 1];
  },
  getSpecificList: function(listId) {
    const allLists = this.getLists();
    return allLists.find(list => list.id === listId);
  },
  saveList: function(listName) {
    const allLists = this.getLists();
    const newList = {
      id: 0,
      name: listName,
      color: this.getRandomColor(),
      tasks: []
    };
    let lastItem = '';
    if (allLists) {
      lastItem = this.getLastItem();
      newList.id = lastItem.id + 1;
      allLists.push(newList);
      localStorage.setItem('todo-lists', JSON.stringify(allLists));
    } else {
      localStorage.setItem('todo-lists', JSON.stringify([newList]));
    }
  },

  clearLists: function() {
    localStorage.clear();
  },
  getLastTaskFromList: function(listId) {
    const list = this.getSpecificList(listId);
    const tasks = list.tasks;
    return tasks.length > 0 ? tasks[tasks.length - 1]: false;
  },
  getNewTaskIdFromList: function(listId) {
    const lastTask = this.getLastTaskFromList(listId);
    let lastTaskIdNumber = '';
    let newTaskIdNumber = '';
    let newId = '';

    if (lastTask) {
      lastTaskIdNumber = Number(lastTask.id.slice(lastTask.id.indexOf('t')).match(/\d+/)[0]);
      newTaskIdNumber = lastTaskIdNumber + 1;
      newId = `${listId}-t${newTaskIdNumber}`;
    } else {
      newId = `${listId}-t0`
    }
    return newId;
  },
  insertTaskIntoList: function(text, listId) {
    const allLists = this.getLists();
    const taskId = this.getNewTaskIdFromList(listId);

    allLists.forEach(list => {
      if (list.id === listId) {
        list.tasks.push({
          id: taskId,
          text: text,
          done: false
        });
      }
    });
    localStorage.setItem('todo-lists', JSON.stringify(allLists));
  },

  updateList: function(oldListId, newList) {
    const allLists = this.getLists();
    const newLists = allLists.map(list => {
      if (list.id === newList.id) {
        return newList
      } else {
        return list
      }
    });

    localStorage.setItem('todo-lists', JSON.stringify(newLists));
  },
  updateTask: function(taskId, taskState) {
    const listId = Number(taskId.split('-')[0]);
    const list = this.getSpecificList(listId);
    const newListTasks = list.tasks.map(task => {
      if (task.id === taskId) {
        task.done = taskState;
      }

      return task;
    });

    list.tasks = newListTasks;
    this.updateList(listId, list);
  }
};

export default storage; 