import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOrder } from '../../actions/PDSystemActions'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
class FormRegister extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.props.addOrder)}>
                <div className="form-group">
                    <label >Nome do cliente</label>
                    <Field name='name' component='input' className="form-control"/>
                </div>
                <div className="form-group">
                    <label >CPF do cliente</label>   
                    <Field name='cpf' component='input' className="form-control" />
                </div>
                <div className="form-group">
                    <label >Descrição do pedido</label>
                    <Field name='description' component='textarea' className="form-control"/>
                </div>
                <button type="submit" onClick={this.props.addOrder} className="btn btn-primary btn-lg btn-block">Registrar</button>
                
               
            </form>
        )
    }
}

FormRegister = reduxForm({form: 'padreCiceroForm'})(FormRegister)
const mapDispatchToProps = dispatch => bindActionCreators({addOrder, destroyOnUnmount: false}, dispatch)
export default connect(null, mapDispatchToProps)(FormRegister)