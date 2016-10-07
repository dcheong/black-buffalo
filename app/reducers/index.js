import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import todo from './todo'

const rootReducer = combineReducers({
  todo,
  routing
})

export default rootReducer
