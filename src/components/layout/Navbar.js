import React from 'react';
import {Link} from 'react-router-dom'

// shortcut ' rcep' 
// rcc -> create class based component...
// rce -> create class based component with default Export in the END LINE...
// rfc -> create functional based component...
// rfce-> create functional based component with default Export in the END LINE...

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">
                            MovieSeriesInfo
                        </Link>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-react fa-5x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



