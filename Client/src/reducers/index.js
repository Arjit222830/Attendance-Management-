import { combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import teacherReducer from './teacherReducer';
import studentReducer from './studentReducer';

export default combineReducers({
    form: formReducer,
    teachers: teacherReducer,
    students: studentReducer,
    auth: authReducer
});