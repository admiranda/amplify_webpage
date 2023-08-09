import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <a href="/" className="navbar-brand">MiSitio</a>
            </div>
            <div>
                <a href="/">Inicio</a>
                <a href="/acerca">Acerca</a>
                <a href="/contacto">Contacto</a>
                {/* ...otros enlaces según lo que necesites */}
            </div>
        </div>
    );
}

export default Navbar;

