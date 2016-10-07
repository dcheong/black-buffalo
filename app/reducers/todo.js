import { ADD_TODO, REMOVE_TODO } from '../actions/todo'

const initialState = []

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        { id: state.length, content: action.content },
        ...state
      ]
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.index)
    default:
      return state
  }
}
