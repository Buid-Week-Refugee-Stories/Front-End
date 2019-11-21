import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL, DELETE_DATA_START, DELETE_DATA_SUCCESS, DELETE_DATA_FAIL} from '../actions';

const initialState = {
    stories: [],
    isFetching: false,
    error: null,
    isAdded: false,
    isDeleting: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                stories: [],
                isFetching: true,
                error: null,
                isAdded: false,
                isDeleting: false
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isFetching: false,
                error: null,
                isAdded: false,
                isDeleting: false
            }
        case FETCH_DATA_FAIL:
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: action.payload,
                isAdded: false,
                isDeleting: false
            }
        case POST_DATA_START:
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: null,
                isAdded: false,
                isDeleting: false
            }
        case POST_DATA_SUCCESS: {
            return {
                ...state,
                stories: [...state.stories, action.payload],
                isFetching: false,
                error: null,
                isAdded: true,
                isDeleting: false
            }
        }
        case POST_DATA_FAIL: {
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: action.payload,
                isAdded: false,
                isDeleting: false
            }
        }
        case DELETE_DATA_START: {
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: false,
                isAdded: false,
                isDeleting: true
            }
        }
        case DELETE_DATA_SUCCESS: {
            return {
                ...state,
                stories: action.payload,
                isFetching: false,
                error: false,
                isAdded: false,
                isDeleting: false
            }
        }
        case DELETE_DATA_FAIL: {
            return {
                ...state,
                stories: [],
                isFetching: false,
                error: action.payload,
                isAdded: false,
                isDeleting: false
            }
        }
        default:
            return state
    }
}

export default reducer;