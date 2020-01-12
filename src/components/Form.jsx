import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './assets/styles/From.css';

const Form = () => {
    const [validationSelect, setValidationSelect] = useState({
        state: false,
        country: null
    });
    const [validationName, setValidationName] = useState({
        state: false,
        name: null
    });
    const [validationEmail, setValidationEmail] = useState({
        state:false,
        email: null
    });
    const [validationForm, setValidationForm] = useState(false);

    function validationStyle (element, validation) {
        if (validation) {
            element.classList.remove("errorValidation");
            element.classList.add("successValidation");
        }else if(!validation) {
            element.classList.remove("successValidation");
            element.classList.add("errorValidation");
        }
    }

    function handleChangeSelect(e) {

        if (e.target.selectedOptions[0].value === 'init') {
            setValidationSelect({
                state: false,
                country: null
            });
            validationStyle(e.target, false);
        }
        else {
            setValidationSelect({
                state: true,
                country: e.target.selectedOptions[0].value
            });
            validationStyle(e.target, true);
        }
    };

    function handleChangeName (e) {
        if (e.target.value.length < 3) {
            setValidationName({
                state: false,
                name: null
            });
            validationStyle(e.target, false);
        }else {
            setValidationName({
                state: true,
                name: e.target.value
            });
            validationStyle(e.target, true);
        }
    }

    function handleChangeEmail (e) {
        if (e.target.value.includes("@") && e.target.value.length > 5) {
            setValidationEmail({
                state: true,
                email: e.target.value
            });
            validationStyle(e.target, true);
        }else {
            setValidationEmail({
                state: false,
                email: null
            });
            validationStyle(e.target, false);
        }
    }

    function handleChangeSubmit (e) {
        if (validationSelect.state && validationName.state && validationEmail.state) {
            setValidationForm(true);
            validationStyle(e.target, true);
        }else {
            setValidationForm(false);
            validationStyle(e.target, false);
            alert("Complete todos los campos correctamente para poder enviar");
        }
    }

    useEffect(() => {
        if(validationForm) {
            let suscription = {
                country: validationSelect.country,
                name: validationName.name,
                email: validationEmail.email
            }
            console.log(validationEmail)
            axios.post('/suscription', suscription)
                .then((respons) => {
                    alert('Se a enviado correctamente.')
                })
                .catch((error) => {
                    alert('Ocurrio un problema al enviar.')
                })   
        }
    }, [validationForm]);

    return(
    <div className="formContainer">
        <div className="formText">
            <p>Se el <span>primero</span> en conocer <br/> cuando la plataforma estará disponible para tu país.</p>
        </div>
        <div className="form">
            <form action="" method="post">
                <select className="selectCountry formItem" onChange={handleChangeSelect}>
                    <option value="init">Seleciona un país</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="colombia">Colombia</option>
                    <option value="peru">Peru</option>
                </select>
                <input onBlur={handleChangeName} className="name formItem" type="text" name="nombre" placeholder="Nombre" required/>
                <input onBlur={handleChangeEmail} className="email formItem" type="email" name="email" placeholder="Ingresa un E-mail" required/>
                <input onClick={handleChangeSubmit} className="enviar formItem" type="button" value="Enviar"/>
            </form>
        </div>
    </div>
)};

export default Form;