import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/register'>Registrar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/list'>Lista</Link>
                </li>
            </ul>
        </div>
    </nav>
)
export default Header