import { combineReducers } from 'redux';

import { DISPLAY_STUDENTS } from "./action" //Import the actions types constant we defined in our actions

let dataState = { students: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
    case DISPLAY_STUDENTS:
                let { students } = action.data;

                return {...state, students};

    default:
                return state;
        }
    };


const rootReducer = combineReducers({dataReducer});

export default rootReducer;