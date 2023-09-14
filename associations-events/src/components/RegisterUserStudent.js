import React, { useState } from "react";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";


export default function RegisterUserStudent() {
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
                const lastName1 = document.getElementById("request-first-lastName").value;
                const lastName2 = document.getElementById("request-second-lastName").value;
                const email = document.getElementById('request-email').value;
                const cellphone = document.getElementById("request-cellphone").value;
                const license = document.getElementById("request-license").value;
                const lastName = lastName1 + " " +lastName2;
                const userType = 'Estudiante';
                
                const userID = document.getElementById('personal-id').value;



                const miForm = event.currentTarget;
                event.preventDefault();

                if(miForm.checkValidity()=== false){
                    event.stopPropagation();
                    setValidated(true);
                }else{
                
                


                fetch('http://localhost:8080/registerStudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "inName": name,
                        "inLastName": lastName,
                        "inEmail": email,
                        "inLicense": license,
                        "inPassword": password,
                        "inUserType": userType,
                        "inPhone": cellphone,
                        "inCareer": career,
                        "inID": userID
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
                        <input id="request-name"   autoFocus required name="request-name" type="text" placeholder="Ingrese su nombre" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label required htmlFor="request-first-lastName" className="label-register">Primer Apellido</label>
                        <input id="request-first-lastName" name="request-first-lastName" type="text" placeholder="Ingrese su primer apellido" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-second-lastName" className="label-register">Segundo Apellido</label>
                        <input id="request-second-lastName" required name="request-second-lastName" type="text"placeholder="Ingrese su segundo apellido" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-cellphone" className="label-register">Teléfono</label>
                        <input id="request-cellphone" name="request-cellphone" required placeholder="Ingrese su número telefónico" type="tel" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-email" className="label-register">Correo electrónico</label>
                        <input type="email" id="request-email" name="request-email" required title="El correo debe ser institucional" placeholder="Ingrese su correo electrónico" className="data-inputs-register"></input>
                    </div>




                    <div className="inputs-container">
                            <label htmlFor='career' className="label-register">Carrera</label>
                            <select name="career" id="career">
                            <option className="options-register" value="null" >Seleccione su carrera:  </option>
                            <option className="options-register" value="Computación" >Computación</option>
                            </select>
                        
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-password" className="label-register">Contraseña</label>
                        <input type="password" id="request-password" name="request-password" required placeholder="Ingrese su contraseña" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="repeat-password" className="label-register">Confirmar contraseña</label>
                        <input type="password" id="repeat-password" name="repeat-password" required placeholder="Confirmar su contraseña" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="request-license" className="label-register">Carnet Estudiantil</label>
                        <input  type="text" id="request-license" name="request-license" required placeholder="Ingrese su número de carné" className="data-inputs-register"></input>
                    </div>

                    <div className="inputs-container">
                        <label htmlFor="personal-id" className="label-register">Número de identificación</label>
                        <input title="Debe ser en formato: 20########" type="text" id="personal-id" name="personal-id" required placeholder="Ingrese su número de identificación" className="data-inputs-register"></input>
                    </div>
                   <button type="submit"id="register-button">Registrarse ➔</button>
                    
                </div>
                
               
                

            </form>


        </div>
        
        
        
    )
}