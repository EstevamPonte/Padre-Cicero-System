import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrder, updateStatus } from '../../actions/PDSystemActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusFase from '../statusFase/statusFase'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
    componentDidMount() {
        this.props.getOrder()
    }

    

    rederRow() {
        const list = this.props.list || []
        return list.map(client => (
            client.status === 'blue'?
            <tr key={client.id}>
                <td>{client.name}</td>
                <td className='ballTd'>
                    <div className='ballDiv' style={{backgroundColor: client.status}}>
                        
                    </div>
                </td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => this.props.updateStatus(client)}>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </button>
                </td>
            </tr>
            :
            null
        ))
        
    }

    render() {

        return (
            <table className="table table-bordered">
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
const mapDispatchToProps = dispatch => bindActionCreators({getOrder, updateStatus}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)