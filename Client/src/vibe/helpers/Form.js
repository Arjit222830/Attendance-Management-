import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends React.Component {

    onSubmit= (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    }

    renderError= ({error, touched})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }


    renderInput= (props)=>{
       console.log(props);
        const className= `field ${props.meta.error && props.meta.touched?'error':''} `;
        return (
            <div className={className}>
                {props.label}
                <input style={{width:`${props.width}`}} {...props.input} type={props.type} autoComplete="off"/>
                {this.renderError(props.meta)}
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div>
                    <Field name="name" component={this.renderInput} label="Name" type="text" width='50vw'/>
                    <Field name="email" component={this.renderInput} label="Email" type="email" width='50vw'/>
                    <Field name="password" component={this.renderInput} label="Password" type="password" width='50vw'/>
                    <button type="submit" className="ui button primary">Submit</button>
                </div>
            </form>
        );
    }
}

const validate= (formValues) => {
    console.log(formValues);
    const errors= {};
    if(!formValues.name)
        errors.name= 'You must enter your name';

    if(!formValues.email)
        errors.email= 'You must enter your email';

    if(!formValues.password)
        errors.password= 'You must enter your password';
    else if(formValues.password.length<=5)
        errors.password= 'Your password must be greater than 5 characters';

    return errors;
}

export default reduxForm({
    form: 'form',
    validate: validate
})(Form);