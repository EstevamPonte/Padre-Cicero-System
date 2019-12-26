import React from 'react'

export default props => (
    <ul className="list-group">
        <li className='list-group-item'>
            <span class="badge badge-pill" style={{height: '24px'}}><div className='ballDiv' style={{backgroundColor: 'red'}}/></span>
            Pedido novo
        </li>
        <li className='list-group-item'>
            <span class="badge badge-pill" style={{height: '24px'}}><div className='ballDiv' style={{backgroundColor: 'yellow'}}/></span>
            Pedido sendo preparado
        </li>
        <li className='list-group-item'>
            <span class="badge badge-pill" style={{height: '24px'}}><div className='ballDiv' style={{backgroundColor: 'green'}}/></span>
            Pedido em conferência
        </li>
        <li className='list-group-item'>
            <span class="badge badge-pill" style={{height: '24px'}}><div className='ballDiv' style={{backgroundColor: 'blue'}}/></span>
             Pedido pronto para pagamento
        </li>
    </ul>
) 