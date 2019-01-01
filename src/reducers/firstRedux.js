import types from '../constents/ActionTypes.js';

const initState={
    reduxState:'',
};

export default function rootReducer(state=initState,action){
    switch(action.type){
        case types.frist.fristRedux:
            return {
                ...state,
                reduxState:action.data,
            }
        default:
            return state
    }
}