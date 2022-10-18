
import { SAVE_DATA, GET_DATA, DELETE_DATA } from './types';

const INITIAL_STATE = {
    data: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                data: action.payload
            };

        case GET_DATA:
            return {
                ...state,
                data: [...state.data]
            };
        case DELETE_DATA:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

export default productsReducer;