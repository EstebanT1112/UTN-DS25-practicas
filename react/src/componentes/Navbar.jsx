import React from 'react';

export default function Navbar() {
    return (
    <div className="menu">
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li className="drop">
                    <a href="/secciones">Géneros</a>
                    <ul className="submenu">
                        <li><a href="/secciones#romance">Romance</a></li>
                        <li><a href="/secciones#psicologia">Psicología</a></li>
                        <li><a href="/secciones#terror">Terror</a></li>
                        <li><a href="/secciones#cienciaficcion">Ciencia Ficción</a></li>
                    </ul>
                </li>
                <li><a href="/registro">Registro</a></li>
                <li><a href="/contacto">Contáctanos</a></li>
                </ul>
        </nav>
    </div>
    );
}
