import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetch posts');
    fetch(' http://localhost:5000/posts')
    .then(res => res.json())
    .then(posts => dispatch(
        {
            type: FETCH_POSTS,
            payload: posts

        }
    ));
}


export const createPost = (postData) => dispatch => {
    console.log('create post action');
    fetch(' http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch(
        {
            type: NEW_POST,
            payload: post

        }
    ));
}

export * as actionCreators from "./types";