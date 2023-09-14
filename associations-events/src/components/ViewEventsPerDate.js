import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import Event from "./Event";
import { createRoot } from 'react-dom';



export default function EventPerDate(props) {
  const containerRef = useRef(null);
  const [array, setArray] = useState([]); // Usar estado para almacenar los datos

  useEffect(() => {
    const dateFormated = props.date[2] + "-" + props.date[1] + "-" + props.date[0];

    fetch('http://localhost:8080/showEventsbyDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'inDate': dateFormated
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArray(data); // Actualizar el estado con los datos del fetch
      });
  }, [props.date]);

  useEffect(() => {
    const daysHTML = [];
    for (var event of array) {
      daysHTML.push(
        <Event
          key={event.id} // Agregar una clave única a cada elemento en el array
          name={event.name}
          hour={event.time}
          location={event.site}
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
    <div className="calendar-square">
      <div className="header-calendar">
        <h2 id="day-from-calendar">{props.date[0]} - {props.date[1]} - {props.date[2]}</h2>
      </div>
      <div className="line-event"></div>
      <div className="event-list" ref={containerRef}></div>
    </div>
  );
}
