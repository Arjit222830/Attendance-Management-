import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchStudents } from '../../actions';

const Students = (props)=> {
    
    useEffect(()=>{
        props.fetchStudents();
    },[]);
    
        
    const table= ()=>{

        return  props.students.map( (student) =>{
            return (
                <tr>
                    <th scope="row">{student._id}</th>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                </tr>
            )
        });  
    }

    if(!props.auth.isSignedIn)
        return <>Not Logged In</>
    
    if(!props.students)
        return <>Loading...</>

    return  (
        <div className="table-responsive-sm">
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {table()}
                </tbody>
            </table>
        </div>
    );
}
    

const mapStateToProps= (state)=>{
    console.log(state);
    return { 
        students: Object.values(state.students),
        auth: state.auth
    };
    
};

const Form= reduxForm({
    form: 'fetch_students'
})(Students);

export default connect(mapStateToProps,{fetchStudents})(Form);