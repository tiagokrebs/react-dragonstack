import { DRAGON } from '../actions/types';
import fetchStates from './fetchStates'

const DEFAULT_DRAGON = { 
    generationId: '',
    dragonId: '',
    nickname: '',
    birthdate: '',
    traits: []
};

// reducer para Redux
const dragon = (state = DEFAULT_DRAGON, action) => {
    switch(action.type) {
        case DRAGON.FETCH:
            return { ...state, status: fetchStates.fetching };
        case DRAGON.FETCH_ERROR:
            return { ...state, status: fectchStates.error, message: action.message };
        case DRAGON.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.generation };
        default:
            return state;
    };
};

export default dragon;