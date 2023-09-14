import React, { useState, useEffect } from "react";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";



export default function RegisterAssociation() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const register = (event) => {
        const password = document.getElementById("request-password").value;
        const password2 = document.getElementById("repeat-password").value;
        const career = document.getElementById('career').value;

        if (password != password2) {
            alert("Las contraseñas no coinciden");
        } else {
            if (career === 'null') {
                alert("Debe escoger una carrera");
            } else {
                //Required data
                const name = document.getElementById('request-name').value;

                const miForm = event.currentTarget;
                event.preventDefault();

                if(miForm.checkValidity()=== false){
                    event.stopPropagation();
                    setValidated(true);
                }else{
                
                


                fetch('http://localhost:8080/registerAsociation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "inName": name,
                        "inPassword": password,         
                        "inCareer": career,
                        
                    }),
                }).then((res)=> res.json())
                .then((data) => {
                    console.log(data.access)
                    if(data.access == 'Registro exitoso'){
                        navigate('/');
                    }else{
                        alert(data.message)
                    }
                    
                })

                
                .catch(error => {
                    console.log('Error al obtener datos desde el backend:', error);
                })
                }
                    }
                }


        
    }
    


    return (
        
        <div>
            <form id="register-students-form" onSubmit={register}>
                <div className="container-data-register">
                    <div className="inputs-container">
                        <label htmlFor="request-name" className="label-register">Nombre</label>
                        <input id="request-name" autoFocus required name="request-name" type="text" placeholder="Ingrese el nombre de la asociación" className="data-inputs-register"></input>
                    </div>

                    




                    <div className="inputs-container">
                            <label htmlFor='career' className="label-register">Carrera</label>
                            <select name="career" id="career">
                            <option className="options-register" value="null" >Seleccione su carrera:</option>
                            <option className="options-register" value="Computación" >Computación</option>
                            <option className="options-register" value="Administración de Empresas" >Administración de Empresas</option>
                            </select>
                        
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-password" className="label-register">Contraseña</label>
                        <input id="request-password" name="request-password" type="password" required placeholder="Ingrese su contraseña" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="repeat-password" className="label-register">Confirmar contraseña</label>
                        <input id="repeat-password" name="repeat-password" type="password" required placeholder="Confirmar su contraseña" className="data-inputs-register"></input>
                    </div>
                    <button type="submit"id="register-button">Registrarse ➔</button>

                    
                </div>
                
                
                

            </form>


        </div>
        
        
        
    )
}