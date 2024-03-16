import { combineReducers } from "@reduxjs/toolkit";
import { ADD_BULK_POST, ADD_POST, DELETE_POST, EDIT_POST } from "./action";




const initialState = {
    postedContent: []
}

const postedContentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return{
                ...state,
                postedContent:[ action.payload, ...state.postedContent]
            }

        case DELETE_POST:
            return{
                ...state,
                postedContent:state.postedContent.filter((post)=>post.postId !== action.payload)
            } 
        
        case EDIT_POST:
           return {
            ...state,
            postedContent: state.postedContent.map(post=>{
                if(post.postId=== action.payload.postId){
                    return {...post, text: action.payload.postdata}
                }
                return post 
               })
           }
        case ADD_BULK_POST:
            return{
                ...state,
                postedContent:action.payload
            }
        default:
            return state;
    }
};

const rootReducers = combineReducers({
    postReducer: postedContentReducer
});

export default rootReducers;