import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import Form from '../../vibe/helpers/Form';

class StudentLogin extends React.Component {
  
    onSubmit= (formValues) => {
        console.log({ ...formValues, person:"student" });
        this.props.signIn({ ...formValues, person:"student" });
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


export default connect(null,{signIn, signOut})(StudentLogin);