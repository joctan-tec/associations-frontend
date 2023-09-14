import React, { useState, useRef, useEffect  } from "react";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";



export default function MakeProposal(props) {
    const navigate = useNavigate();
    document.title = "Inicio"
    const [validated, setValidated] = useState(false);
    const [isResizable, setIsResizable] = useState(false);
    const [requestTopic, setRequestTopic] = useState('');
    const [requestTarget, setRequestTarget] = useState('');
    const [requestIdea, setRequestIdea] = useState('');
    
    const textareaRefTopic = useRef(null);
    const textareaRefTarget = useRef(null);
    const textareaRefIdea = useRef(null);
  
    const enableResize = () => {
      setIsResizable(true);
    };
  
    const disableResize = () => {
      setIsResizable(false);
    };
  
    const handleRequestTopicChange = (event) => {
      setRequestTopic(event.target.value);
    };
  
    const handleRequestTargetChange = (event) => {
      setRequestTarget(event.target.value);
    };
  
    const handleRequestIdeaChange = (event) => {
      setRequestIdea(event.target.value);
    };
  
    useEffect(() => {
      if (isResizable) {
        textareaRefTopic.current.style.height = 'auto';
        textareaRefTopic.current.style.height = `${textareaRefTopic.current.scrollHeight}px`;
        
        textareaRefTarget.current.style.height = 'auto';
        textareaRefTarget.current.style.height = `${textareaRefTarget.current.scrollHeight}px`;
        
        textareaRefIdea.current.style.height = 'auto';
        textareaRefIdea.current.style.height = `${textareaRefIdea.current.scrollHeight}px`;
      }
    }, [isResizable, requestTopic, requestTarget, requestIdea]);


    const register = (event) => {

        const career = document.getElementById('career').value;
        const topic = document.getElementById('request-topic').value;
        const target = document.getElementById('request-target').value;
        const ideas = document.getElementById('request-idea').value;
        const id = props.id + "";
        const miForm = event.currentTarget;
        event.preventDefault();

                if(miForm.checkValidity()=== false){
                    event.stopPropagation();
                    setValidated(true);
                }
                
                
                


                fetch('http://localhost:8080/InsertPropusals', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'inAssociation': career,
                        'inThematic': topic,
                        'inId':id,
                        'inObjetives': target,
                        'inActivityIdeas':ideas,
                        'inCategory': 'Music'
                        
                    }),
                }).then((res)=> res.json())
                .then((data) => {
                    console.log(data.access)
                    if(data.access == 'Registro exitoso'){
                        alert('Se envió correctamente')
                    
                    }else{
                        alert(data.message)
                    }
                    
                })

                
                .catch(error => {
                    console.log('Error al obtener datos desde el backend:', error);
                })
                }
                    
                


             
    
    

    

    


    return (
        
        <div className="container-form-proposal">
            <form id="register-students-form" onSubmit={register}>
                
            
                    
                <div className="container-data-register">

                <div className="inputs-container">
                            <label htmlFor='career' className="label-register">Asociación</label>
                            <select name="career" id="career">
                            <option className="options-register" value="null" >Seleccione la asociación:</option>
                            <option className="options-register" value="ASODEC" >ASODEC</option>
                            <option className="options-register" value="ASOAE" >ASOAE</option>
                            </select>
                        
                    </div>
                    
                    <div className="inputs-container">
        <label htmlFor="request-topic" className="label-register">Temática</label>
        <textarea
          ref={textareaRefTopic}
          id="request-topic"
          required
          name="request-topic"
          value={requestTopic}
          onChange={handleRequestTopicChange}
          onFocus={enableResize}
          onBlur={disableResize}
          style={{
            resize: isResizable ? 'vertical' : 'none',
            minHeight: '50px',
          }}
          placeholder="Ingrese la temática del evento"
          className="data-inputs-register"
        />
      </div>
      
      <div className="inputs-container">
        <label htmlFor="request-target" className="label-register">Objetivos</label>
        <textarea
          ref={textareaRefTarget}
          id="request-target"
          required
          name="request-target"
          value={requestTarget}
          onChange={handleRequestTargetChange}
          onFocus={enableResize}
          onBlur={disableResize}
          style={{
            resize: isResizable ? 'vertical' : 'none',
            minHeight: '50px',
          }}
          placeholder="Escriba los objetivos"
          className="data-inputs-register"
        />
      </div>

      <div className="inputs-container">
        <label htmlFor="request-idea" className="label-register">Ideas de actividades</label>
        <textarea
          ref={textareaRefIdea}
          id="request-idea"
          required
          name="request-idea"
          value={requestIdea}
          onChange={handleRequestIdeaChange}
          onFocus={enableResize}
          onBlur={disableResize}
          style={{
            resize: isResizable ? 'vertical' : 'none',
            minHeight: '50px',
          }}
          placeholder="Escriba ideas de actividades"
          className="data-inputs-register"
        />
      </div>
      <button type="submit"id="register-button">Enviar Propuesta ➔</button>

    </div>
                    
                
                
                    
                
                

            </form>


        </div>
        
        
        
    )}
