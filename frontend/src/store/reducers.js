import { combineReducers } from "@reduxjs/toolkit";
import { ADD_POST } from "./action";

const initialState = {
    postedContent: []
}

const postedContentReducer = (state = initialState.postedContent, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducers = combineReducers({
    postedContent: postedContentReducer
});

export default rootReducers;