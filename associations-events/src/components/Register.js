import React, { useState, useEffect } from "react";
import '../App.css';
import NavigationVar from './NavigationVar';
import RegisterUserStudent from './RegisterUserStudent';

import RegisterAssociation from "./RegisterAssociation";


export default function Register() {
    
    const [selectedAcount,changeType] = useState(1);

    const swapAccount = () => {
        const form = document.getElementById('accountType');
        switch (form.value) {
            case 'Estudiante':
                changeType(2)
                break;
        
            case "Asociación":
                changeType(3)
                break;
            default:
                changeType(1)
                break;
        }
    }

    document.title = "Crear usuario";


    return (
        <div>
        <NavigationVar back="/"/>
        
        <div className="container-h1">
            <h1 className="header-register">Ingrese sus datos</h1>
        </div>
        
        <div className='screen-view-register'>
            <div className="register-container">
            

            <div className="container-form-register-select-account">
                <form id="form-register-select-account">
                    <label htmlFor='accountType' className="label-register">Tipo de cuenta</label>
                    <select id="accountType">
                        <option className="options-register" value="null" onClick={swapAccount}>Seleccione el tipo de cuenta:  </option>
                        <option className="options-register" value="Estudiante" onClick={swapAccount}>Estudiante</option>
                        <option className="options-register" value="Asociación" onClick={swapAccount}>Asociación</option>
                    </select>
                </form>
            </div>
            {selectedAcount === 2 ? <RegisterUserStudent /> : selectedAcount === 3 ? <RegisterAssociation /> : <RegisterUserStudent /> }
            
        
        </div>
        </div>
        </div>
        
    )
}