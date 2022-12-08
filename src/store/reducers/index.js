import { combineReducers } from "redux";
import TodoReducer from './todoReducer';

const reducers = combineReducers({
    data : TodoReducer
})
  
export default reducers;