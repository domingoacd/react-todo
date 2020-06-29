const storage = {
  colors: ['blue', 'orange', 'purple', 'pink'],
  getRandomColor: function() {
    const randomNumber = Math.round(Math.random() * (this.colors.length - 1)); 
    return this.colors[randomNumber];
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
};

export default storage; 