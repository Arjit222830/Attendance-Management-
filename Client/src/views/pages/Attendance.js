import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { reduxForm,Field } from 'redux-form';
import { fetchStudents } from '../../actions';
import axios from '../../axios';

const Attendance = (props)=> {

    const [present, setPresent]= useState('Loading...');

    useEffect(()=>{
        props.fetchStudents();
    },[]);

    
    const onSubmit= async(formValues) =>{
        let c=0;
        await props.students.map((student)=> {
            if(formValues[`attendance-${student.id}`]==='1')
                c++;
        });
        setPresent(c);
        console.log(`Present=${c}`);
        console.log(`Absent=${props.size-c}`);

    }

    const renderInput = (p) => {
        console.log(p);
        return (
          <div className="field">
            <input
              style={{ width: `${p.width}` }}
              {...p.input}
              type={p.type}
              autoComplete="off"
            />
          </div>
        );
      };

    const table= ()=>{

        return  props.students.map( (student) =>{
            return (
                <tr>
                    <th scope="row">{student.id}</th>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                        <div className="row">
                            <div className="col-sm-3">
                                <label>Present</label>
                            </div>
                            <div className="col-sm-3">
                                <label>Absent</label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-3">
                                <Field name={`attendance-${student.id}`} component={renderInput} type="radio" value="1" width="5vw" />
                            </div>
                            <div className="col-3">
                                <Field name={`attendance-${student.id}`} component={renderInput} type="radio" value="0" width="5vw" />
                            </div>
                        </div>
                        
                    </td>
                </tr>
            )
        });  
    }
    
    if(!props.students)
        return <>Loading...</>

    return  (
        <>
            <div className="item">
                No. of students present : {present}
            </div>
            <div className="table-responsive-sm">
                <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table()}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
    

const mapStateToProps= (state)=>{
    console.log(state);
    return { 
        students: Object.values(state.students),
        size: Object.values(state.students).length
    };
    
};

const Form= reduxForm({
    form: 'fetch_students'
})(Attendance);

export default connect(mapStateToProps,{fetchStudents})(Form);