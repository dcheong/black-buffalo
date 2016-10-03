import { ADD_TODO, REMOVE_TODO } from '../actions/todo';

const initialState = {
    todos: [{id: 0, content: 'First todo'}]
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let todoArray =  this.state.todos.slice();
      todoArray.push({id: todoArray.length++, content: action.content});
      return Object.assign(this.state, { todos:todoArray });
    case REMOVE_TODO:
      let slicedArray = this.state.todos.filter(({id, content}) => id!=action.index);
      return Object.assign(this.state, {todos: slicedArray });
    default:
      return state;
  }
}
