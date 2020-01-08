import React from 'react';
import './assets/styles/Footer.css';
import instagram from './assets/img/instagram.svg';
import facebook from './assets/img/facebook.svg';
import twitter from './assets/img/twitter.svg';

const Footer = () => (
    <div className="footer">
        <div className="redes">
            <a href="https://instagram.com" target="_blanck"><img src={instagram} alt="instagram"/></a>
            <a href="https://facebook.com" target="_blanck"><img src={facebook} alt="facebook"/></a>
            <a href="https://twitter.com" target="_blanck"><img src={twitter} alt="twitter"/></a>
        </div>
        <p><a href="">Contáctanos</a> | <a href="">Más información</a> | <a href="">Clilance 2020 &copy;</a></p>
    </div>
)
export default Footer;