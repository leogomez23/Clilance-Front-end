import React from 'react';
import banner from './assets/img/banner-principal.svg';
import './assets/styles/Main.css';

const Main = () => (
    <div id="main" className="main">
        <img src={banner} alt="Banner" />
        <div className="mainText">
            <h1>¡Muy Pronto!</h1>
            <p>¿Quieres <span>asegurar</span> el dinero de un proyecto antes de comenzarlo como Freelance o cliente?</p>
            <p>Estamos trabajando en una plataforma que te permitira asegurar tu dinero antes de poner cualquier proyecto en marcha.</p>
            <a href="#">Conoce Más y Como Puedes Ayudar</a>
        </div>
    </div>
);

export default Main;