
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_BULK_POST = 'ADD_BULK_POST';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId
})

export const editPost = (postId,postdata) => ({
    type: EDIT_POST,
    payload: {
        postId,
        postdata
    }
})

export const addBulkPost = (post) => ({
    type: ADD_BULK_POST,
    payload: post
})