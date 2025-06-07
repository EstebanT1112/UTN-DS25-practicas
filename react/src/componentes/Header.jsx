import React from 'react';
import logo from '../assets/img/logo.jpg'; // Asegurate de tener este archivo en assets

export default function Header() {
    return (
        <div className="cabeza">
        <header>
            <div className="conc">
                <h1>Libros & Más</h1>
                <img src={logo} alt="Logo de la librería" />
            </div>
        </header>
    </div>
  );
}
