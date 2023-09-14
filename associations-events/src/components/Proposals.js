import React, { useState, useRef, useEffect } from "react";
import '../App.css';
import Proposal from "./Proposal";
import { createRoot } from 'react-dom';
export default function Proposals(props) {
    //ShowPropusalPerAsociation
    const [array, setArray] = useState([]);
    const containerRef = useRef(null);
    useEffect(() => {
        
    
        fetch('http://localhost:8080/ShowPropusalPerAsociation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'inName': props.name
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setArray(data); // Actualizar el estado con los datos del fetch
          });
      }, [props.name]);


    useEffect(() => {
        const daysHTML = [];
        for (var event of array) {
          daysHTML.push(
            <Proposal 
                    topic = {event.name}
                    ideas = {event.ideas}
                    target = {event.goals}
                />
          );
        }
    
        // Renderizar el componente solo si hay datos en el array
        if (daysHTML.length > 0) {
          const root = createRoot(containerRef.current);
          root.render(<>{daysHTML}</>);
        }
      }, [array]);



    return (
        <div className="proposal-container">
            <div className="tittles-line">
                <div className="proposal-topic">
                    <h3>Temática</h3>
                </div>

                <div className="proposal-target">
                    <h3>Objetivo</h3>
                </div>

                <div className="proposal-ideas">
                    <h3>Ideas de actividades</h3>
                </div>

                <div className="proposal-approve">
                    <h3>Aprobar</h3>
                </div>
            </div>

            <div className="proposals-lines" ref={containerRef}>
                <Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />
            </div>
            
        </div>
        
    )
}