import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import Form from '../../vibe/helpers/Form';

class TeacherLogin extends React.Component {
  
    onSubmit= (formValues) => {
        console.log({ ...formValues, person:"teacher" });
        this.props.signIn({ ...formValues, person:"teacher" });
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


export default connect(null,{signIn, signOut})(TeacherLogin);