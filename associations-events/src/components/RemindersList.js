import React, { useState, useRef, useEffect } from "react";
import '../App.css';
import Reminder from "./Reminder";
import { createRoot } from 'react-dom';
export default function Reminders(props) {
    const containerRef = useRef(null);
    const [array, setArray] = useState([]); // Usar estado para almacenar los datos

    useEffect(() => {
      
      fetch('http://localhost:8080/showReminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'inId': props.id
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setArray(data); // Actualizar el estado con los datos del fetch
        });
    }, [props.id]);
  
    useEffect(() => {
      const daysHTML = [];
      for (var event of array) {
        daysHTML.push(
          <Reminder
            tittle = {event.Event}
            message = {event.message}
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
        <div className="reminders-container" ref={containerRef}>
            
        </div>
        
    )
}