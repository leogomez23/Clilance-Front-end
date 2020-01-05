import React from 'react';
import banner from './assets/img/banner-principal.svg';
import './assets/styles/Main.css';

const Main = () => (
    <div id="main" className="main">
        <img src={banner} alt="Banner" />
        <div className="mainText">
            <h1>¡Muy Pronto!</h1>
            <p>¿Quieres <span>asegurar</span> el dinero de un proyecto antes de comenzarlo como Freelance o cliente?</p>
            <p>Estamos trabajando una plataforma que te permitira asegurar tu dinero antes de poner cualquier proyecto en marcha.</p>
            <input type="button" value="Conoce Más y Como Puedes Ayudar"/>
        </div>
    </div>
)

const screen = window.screen.width;

const property = document.querySelector('body')

// window.CSS.registerProperty({
//     name: '--screenUser',
//     syntax: '<string>',
//     inherits: true,
//     initialValue: `${screen}px`,
// })

property.style.setProperty('--screenUser', `${screen}px`)

console.log(property)


export default Main;