
const INITAL_STATE  = {
    todo : null
}
  
const todoReducer = (state=INITAL_STATE, action)=>{
    switch(action.type) {
        case 'ADD_DATA' : return {...state, todo : action.payload};
        case 'DELETE_DATA' : return INITAL_STATE;
        default : return state;
    }
}

export default todoReducer;
  
