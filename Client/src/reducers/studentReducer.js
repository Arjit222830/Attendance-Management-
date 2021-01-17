import _ from 'lodash';
import {UPDATE_STUDENT, ADD_STUDENT, DELETE_STUDENT, FETCH_STUDENTS, FETCH_STUDENT} from '../actions/types';

export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_STUDENTS:
            return {...state, ..._.mapKeys(action.payload,'_id')};
        case FETCH_STUDENT:
            return { ...state, [action.payload._id]: action.payload };
        case ADD_STUDENT:
            return { ...state, [action.payload._id]: action.payload };
        case UPDATE_STUDENT:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_STUDENT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
} 