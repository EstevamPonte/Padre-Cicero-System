import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/register'>Padre Cicero System</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/register'>Cadastro de pedido</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/list'>Avançar status do pedido</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/tracking'>Acompanhamento dos pedidos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/cashier'>Caixa</Link>
                </li>
            </ul>
        </div>
    </nav>
)
export default Header