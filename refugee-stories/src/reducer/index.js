import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions';

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
        default:
            return state
    }
}

export default reducer;