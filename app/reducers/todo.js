import { ADD_TODO, REMOVE_TODO } from '../actions/todo';

const initialState = [{id: 0, content: 'First todo'}]

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {id: state.length, content: action.content}
      ];
    case REMOVE_TODO:
      let slicedArray = state.todos.filter(({id, content}) => id!=action.index);
      return Object.assign(state, {todos: slicedArray });
    default:
      return state;
  }
}
