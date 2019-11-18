import axios from 'axios';

// Action types.
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

// Create action to fetch stories.
export const fetchStories = () => dispatch => {

    dispatch(FETCH_DATA_START);

    axios.get(`https://bw-refugees.herokuapp.com/stories`)
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