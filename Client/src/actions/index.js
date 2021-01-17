import axios from '../axios';
import history from '../history';
import { SIGN_IN, SIGN_OUT, ADD_TEACHER, UPDATE_TEACHER, FETCH_TEACHERS, FETCH_TEACHER, DELETE_TEACHER,ADD_STUDENT, UPDATE_STUDENT, FETCH_STUDENTS, FETCH_STUDENT, DELETE_STUDENT, USERS_DETAIL, FETCH_USERS, TIME_VALID, TIME_INVALID} from './types'

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    }
};

export const timing_valid = ()=>{
    return {
        type: TIME_VALID
    }
};

export const timing_invalid = ()=>{
    return {
        type: TIME_INVALID
    }
};

export const signIn= (formValues)=> async (dispatch)=>{
    const response = await axios.post('/student/login', {...formValues} );
    console.log(response.data);
    dispatch({type: SIGN_IN, payload: response.data});
    alert('STUDENT LOGIN SUCCESSFUL');
};

export const addStudent= (formValues)=> async (dispatch)=>{
    const response = await axios.post('/student', {...formValues} );
    console.log(response.data);
    dispatch({type: ADD_STUDENT, payload: response.data});
    alert('STUDENT REGISTRATION SUCCESSFUL');
};

export const fetchStudents= () => async (dispatch) => {
    const response= await axios.get('/student');
    dispatch({type: FETCH_STUDENTS, payload: response.data});
};

export const fetchStudent= (id) => async (dispatch) => {
    const response = await axios.get(`/student/${id}`);
    dispatch({ type: FETCH_STUDENT, payload:response.data});
};

export const deleteStudent= (id)=> async (dispatch)=> {
    console.log(id);
    await axios.delete(`/student/${id}`);
    dispatch({type: DELETE_STUDENT, payload: id});
    alert('A student has been deleted');
}

export const updateStudent= (id, formValues)=> async (dispatch)=> {
    console.log("Edit="+formValues)
    const response=  await axios.put(`/student/${id}`, formValues);
    dispatch({ type: UPDATE_STUDENT, payload: response});
    alert('A student has been updated');
};

export const addTeacher= (formValues)=> async (dispatch)=>{
    const response = await axios.post('/teacher', {...formValues} );
    console.log(response.data);
    dispatch({type: ADD_TEACHER, payload: response.data});
    alert('Teacher REGISTRATION SUCCESSFUL');
    history.push('/home');
};

export const fetchTeachers= () => async (dispatch) => {
    const response= await axios.get('/teacher');
    dispatch({type: FETCH_TEACHERS, payload: response.data});
};

export const fetchTeacher= (id) => async (dispatch) => {
    const response = await axios.get(`/teacher/${id}`);
    dispatch({ type: FETCH_TEACHER, payload:response.data});
};

export const deleteTeacher= (id)=> async (dispatch)=> {
    console.log(id);
    await axios.delete(`/teacher/${id}`);
    dispatch({type: DELETE_TEACHER, payload: id});
    window.location.replace('/');
    alert('A Teacher has been deleted');
}

export const updateTeacher= (id, formValues)=> async (dispatch)=> {
    console.log("Edit="+formValues)
    const response=  await axios.put(`/teacher/${id}`, formValues);
    dispatch({ type: UPDATE_TEACHER, payload: response});
    alert('A Teacher has been updated');
};

export const usersDetail= (name, email, count) => async (dispatch) => {
    const response= await axios.post('/user',{user:name, email:email, points: count});
    dispatch({type: USERS_DETAIL, payload: response.data});
};

export const fetchUsers= () => async (dispatch) => {
    const response= await axios.get('/user');
    console.log(response.data);
    dispatch({type: FETCH_USERS, payload: response.data});
};
