import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrder, updateStatus, addOnExcluded, showInfo } from '../../actions/PDSystemActions'
import { Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusFase from '../statusFase/statusFase'

import { faTimesCircle, faArrowRight, faInfo } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
    componentDidMount() {
        this.props.getOrder()
    }

    showDetails() {
        return (
            <Redirect to='/register'/>
        )
    }

    rederRow() {
        const list = this.props.list || []
        return list.map(client => (
            client.status !== 'pago' ?
            <tr key={client.id}>
                <td>{client.name}</td>
                <td className='ballTd'>
                    <div className='ballDiv' style={{backgroundColor: client.status === 'pago' ? 'blue' : client.status}}></div>
                </td>
                <td>
                    <Link to='/register'>
                        <button type="button" className="btn btn-info" onClick={() => this.props.showInfo(client)}>
                            <FontAwesomeIcon icon={faInfo} size='lg' />
                        </button>
                    </Link>
                    <button type="button" className="btn btn-success" disabled={client.status === 'blue' ? true : false} onClick={() => this.props.updateStatus(client)}>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.addOnExcluded(client)}>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                    </button>
                </td>
            </tr>
            :
            null
        ))
        
    }

    render() {

        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col" className='status'>Status</th>
                        <th scope="col" className='table-actions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.rederRow()}
                </tbody>
                <StatusFase/>
            </table>
        )
    }
}

const mapStateToProps = state => ({list: state.PDsystem.list})
const mapDispatchToProps = dispatch => bindActionCreators({getOrder, updateStatus, addOnExcluded, showInfo}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)