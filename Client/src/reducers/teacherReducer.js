import _ from 'lodash';
import {UPDATE_TEACHER, ADD_TEACHER, DELETE_TEACHER, FETCH_TEACHERS, FETCH_TEACHER} from '../actions/types';

export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_TEACHERS:
            return {...state, ..._.mapKeys(action.payload,'_id')};
        case FETCH_TEACHER:
            return { ...state, [action.payload._id]: action.payload };
        case ADD_TEACHER:
            return { ...state, [action.payload._id]: action.payload };
        case UPDATE_TEACHER:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_TEACHER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
} 