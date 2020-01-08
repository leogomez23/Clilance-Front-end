import React, {useState, useEffect} from 'react';
import './assets/styles/From.css'
import useValidation from '../customHooks/useValidation';


const Form = () => {
    const [validationSelect, setValidationSelect] = useState(false);
    const [validationName, setValidationName] = useState(false);
    const [validationEmail, setValidationEmail] = useState(false);

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
            setValidationSelect(false);
            validationStyle(e.target, false);
        }
        else {
            setValidationSelect(true);
            validationStyle(e.target, true);
        }
    };

    function handleChangeName (e) {
        if (e.target.value.length < 3) {
            setValidationName(false);
            validationStyle(e.target, false);
        }else {
            setValidationName(true);
            validationStyle(e.target, true);
        }
    }

    function handleChangeEmail (e) {
        if (e.target.value.includes("@") && e.target.value.length > 5) {
            setValidationEmail(true);
            validationStyle(e.target, true);
        }else {
            setValidationEmail(false);
            validationStyle(e.target, false);
        }
    }

    function handleChangeClick (e) {
        if (validationSelect && validationName && validationEmail) {
            validationStyle(e.target, true);
        }else {
            validationStyle(e.target, false);
            alert("Complete todos los campos para poder enviar")
        }
    }

    useEffect(() => {
        console.log("Select esta en: "+validationSelect);
        console.log("Name esta en: "+validationName);
    }, [validationSelect, validationName]);

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
                <input onClick={handleChangeClick} className="enviar formItem" type="button" value="Enviar"/>
            </form>
        </div>
    </div>
)};

export default Form;