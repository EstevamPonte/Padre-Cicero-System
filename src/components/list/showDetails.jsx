import React, { Component } from 'react'
import { Field } from 'redux-form'

class FormRegister extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <Field name='name' component='input' value={this.props.name} readOnly={true} rea className="form-control"/>
                </div>
                <div className="form-group">
                    <Field name='cpf' component='input' readOnly={true} value={this.props.cpf} className="form-control" />
                </div>
                <div className="form-group">
                    <Field name='description' component='textarea' value={this.props.description} readOnly={true} className="form-control"/>
                </div>
            </form>
        )
    }
}


export default FormRegister