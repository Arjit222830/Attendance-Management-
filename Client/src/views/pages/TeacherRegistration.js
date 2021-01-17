import React from 'react';
import { connect } from 'react-redux';
import { addTeacher } from '../../actions';
import Form from '../../vibe/helpers/Form';

class TeacherRegistration extends React.Component {
  
    onSubmit= (formValues) => {
        console.log(formValues);
        this.props.addTeacher(formValues);
    }      

    render() {
        return (
            <>
                <br/>
                <Form onSubmit={this.onSubmit} />
            </>
        );
    }
}


export default connect(null,{addTeacher})(TeacherRegistration);