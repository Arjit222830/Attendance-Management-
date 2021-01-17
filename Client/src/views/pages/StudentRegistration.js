import React from 'react';
import { connect } from 'react-redux';
import { addStudent} from '../../actions';
import Form from '../../vibe/helpers/Form';

class StudentRegistration extends React.Component {
  
    onSubmit= (formValues) => {
        console.log(formValues);
        this.props.addStudent(formValues);
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


export default connect(null,{addStudent})(StudentRegistration);