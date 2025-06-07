//Fromato de Visualizacion
import React from 'react';

export default function SeccionBloque({ id, titulo, descripcion, libros }) {
    return (
        <div id={id} className="bloque-seccion">
            <h2>{titulo}</h2>
            <p id="descripcion-sec">{descripcion}</p>

            <div className="libros-container">
                {libros.map((libro, index) => 
                (<div className="libro" key={index}>
                        <figure>
                            <img src={libro.imagen} alt={libro.titulo} />
                            <figcaption>
                                <strong>{libro.titulo}</strong><br />
                                By {libro.autor}
                            </figcaption>
                        </figure>
                        <p className="descripcion">{libro.descripcion}</p>
                    </div>
                ))}
            </div>
    </div>
    );
}
