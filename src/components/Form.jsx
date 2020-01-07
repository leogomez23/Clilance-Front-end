import React from 'react';
import './assets/styles/From.css'

const From = () => (
    <div className="formContainer">
        <div className="formText">
            <p>Se el <span>primero</span> en conocer <br/> cuando la plataforma estará disponible para tu país.</p>
        </div>
        <div className="form">
            <form action="" method="post">
                <select className="selectCountry formItem">
                    <option value="init">Seleciona un país</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="colombia">Colombia</option>
                    <option value="peru">Peru</option>
                </select>
                <input className="name formItem" type="text" name="nombre" placeholder="Nombre" required/>
                <input className="email formItem" type="email" name="email" placeholder="Ingresa un E-mail" required/>
                <input className="enviar formItem" type="button" value="Enviar"/>
            </form>
        </div>
    </div>
);

export default From;