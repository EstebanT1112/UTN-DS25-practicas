import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <p>Libros & Más</p>
                </div>
                <div className="footer-links">
                    <p><a href="mailto:contacto@librosymas.com">contacto@librosymas.com</a></p>
                    <div className="redes">
                        <a href="https://facebook.com/librosymas" target="_blank">Facebook</a>
                        <a href="https://instagram.com/librosymas" target="_blank">Instagram</a>
                        <a href="https://twitter.com/librosymas" target="_blank">Twitter</a>
                    </div>
                    <p><a href="/terminos">Términos y Condiciones</a></p>
                </div>
                <p className="copyright">
                &copy; 2025 Libros & Más. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
