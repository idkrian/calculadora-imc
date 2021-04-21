import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to='/'>Calculadora de IMC</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                            <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/calculadora">Calculadora</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/riscos">Riscos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
