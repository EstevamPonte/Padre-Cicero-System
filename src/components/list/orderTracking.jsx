import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrder } from '../../actions/PDSystemActions'
import StatusFase from '../statusFase/statusFase'
class OrderTracking extends Component {
    componentDidMount() {
        this.props.getOrder()
    }

    rederRow() {
        const list = this.props.list || []
        return list.map(client => (
            client.status !== 'pago'?
            <tr key={client.id}>
                
                <td>{client.name}</td>
                <td >
                    {`${Math.floor((Date.now() - client.date)/ 60000)} minutos` }
                </td>
                <td className='ballTd'>
                    <div className='ballDiv' style={{backgroundColor: client.status === 'pago' ? 'blue' : client.status}}></div>
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
                        <th scope="col" className='status'>Tempo de espera</th>
                        <th scope="col" className='table-actions'>Status</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({getOrder}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OrderTracking)