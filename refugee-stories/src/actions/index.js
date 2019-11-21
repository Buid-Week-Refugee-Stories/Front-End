import axios from 'axios';
import { axiosWithAuth } from '../components/axiosWithAuth';

// Action types.
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAIL = 'POST_DATA_FAIL';

export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAIL = 'DELETE_DATA_FAIL';

export const APPROVE_STORY_START = 'APPROVE_STORY_START';
export const APPROVE_STORY_SUCCESS = 'APPROVE_STORY_SUCCESS';
export const APPROVE_STORY_FAIL = 'APPROVE_STORY_FAIL';

// Create action to fetch stories.
export const fetchStories = () => dispatch => {

    dispatch({ type: FETCH_DATA_START });

    axios.get('https://bw-refugees.herokuapp.com/stories')
        .then(res => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: res.data
            });

            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: FETCH_DATA_FAIL,
                payload: err
            });

            console.log(err);
        });
}

// Create action to fetch stories.
export const addStory = (story) => dispatch => {

    dispatch({ type: POST_DATA_START });

    axios.post('https://bw-refugees.herokuapp.com/stories', story)
        .then(res => {
            dispatch({
                type: POST_DATA_SUCCESS,
                payload: res.data
            });

            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: POST_DATA_FAIL,
                payload: err
            });

            console.log(err);
        });
}

export const deleteStory = (story) => dispatch => {
    dispatch({type:DELETE_DATA_START});

    axiosWithAuth().delete(`https://bw-refugees.herokuapp.com/stories/${story.id}`)
        .then(res => {
            console.log('deleted item', res.data)
            dispatch({type: DELETE_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: DELETE_DATA_FAIL, payload: err});
        })

}