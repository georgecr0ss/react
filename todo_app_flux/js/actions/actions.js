import TodoConstants from '../constants/constants';
import TodoDispatcher from '../dispatchers/dispatcher';
import service from '../service/service';

let counter = 0;

let t = (item,date) => {
  let todo = {
      todo: item,
      id: counter++,
      created: date.getDate() + "/" + (date.getMonth() + 1),
      completed: false
  };
  return todo;
}

export default {
    addTodo(item){
        let date = new Date();
        let todo = t(item, date)
        // console.log(todo);
        TodoDispatcher.dispatch({
            actionType: TodoConstants.ADD_TODO, item: todo
        });
        // this.save('addTodo', todo);
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            actionType: TodoConstants.TOGGLE_TODO, id
        });
        // this.save('toggleTodo', id);
    },

    save(action, item) {
        service[action](item);
    }
}
