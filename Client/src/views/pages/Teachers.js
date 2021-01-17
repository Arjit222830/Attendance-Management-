import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchTeachers } from '../../actions';

const Teachers = (props)=> {
    
    useEffect(()=>{
        props.fetchTeachers();
    },[]);
    
        
    const table= ()=>{

        return  props.teachers.map( (teacher) =>{
            return (
                <tr>
                    <th scope="row">{teacher.id}</th>
                    <td>{teacher.name}</td>
                    <td>{teacher.email}</td>
                </tr>
            )
        });  
    }
    
    if(!props.teachers)
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
        teachers: Object.values(state.teachers),
    };
    
};

const Form= reduxForm({
    form: 'fetch_teachers'
})(Teachers);

export default connect(mapStateToProps,{fetchTeachers})(Form);