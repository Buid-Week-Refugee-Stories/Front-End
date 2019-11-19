import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL } from '../actions';

const initialState = {
    stories: [],
    isFetching: false,
    error: null,
    isAdding: false,
    approved: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                stories: [],
                isFetching: true,
                error: null,
                isAdding: false,
                approved: false
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isFetching: false,
                error: null,
                isAdding: false,
                approved: false
            }
        case FETCH_DATA_FAIL:
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: action.payload,
                isAdding: false,
                approved: false
            }
        case POST_DATA_START:
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: null,
                isAdding: true,
                approved: false
            }
        case POST_DATA_SUCCESS: {
            return {
                ...state,
                stories: [...state.stories, action.payload],
                isFetching: false,
                error: null,
                isAdding: false,
                approved: true
            }
        }
        case POST_DATA_FAIL: {
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: action.payload,
                isAdding: false,
                approved: false
            }
        }
        default:
            return state
    }
}

export default reducer;