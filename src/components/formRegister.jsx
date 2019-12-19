import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOrder, handleClientNameChange } from '../actions/PDSystemActions'

const formRegister = (props) => {
    return (
        <form>
            <div className="form-group">
                <input onChange={props.handleClientNameChange} className="form-control" type="text" placeholder="Nome do cliente" />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="CPF" />
            </div>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Descrição do pedido..." rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.addOrder({clientName: props.clientName})}>Registrar</button>
        </form>
    )
}
const mapStateToProps = state => ({
    clientName: state.PDsystem.clientName,
    clientCPF: state.PDsystem.clientCPF,
    description: state.PDsystem.description
})
const mapDispatchToProps = dispatch => bindActionCreators({addOrder, handleClientNameChange}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(formRegister)