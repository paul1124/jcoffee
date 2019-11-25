import React from 'react';
import './styles/footer.scss';

export default function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="footer-links">
                <a href="instagram" className="footer-link">Instagram</a>
                <a href="faceboo" className="footer-link">Facegbook</a>
                <a href="twitter" className="footer-link">Twitter</a>
            </div>
            <div className="footer-about">
                <div className="footer-about-left"></div>
                <div className="footer-about-right"></div>
            </div>
            <div className="footer-copyright">@Made by Paul Hong</div>
        </section>
    )
}