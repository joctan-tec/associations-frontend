import React, { useState, useEffect } from "react";
import '../App.css';
import NavigationVar from './NavigationVar.js';

import Calendar from "./Calendar"
import EventPerDate from "./ViewEventsPerDate"
import RemindersList from "./RemindersList";
import MakeProposal from "./MakeProposal";

export default function ViewEventsStudent(props) {

    const today = new Date();

    const [arrayEvents, setArrayEvents] = useState([]);

    const user = parseInt(props.name);
    const [selectedDate, setSelectedDate] = useState([today.getDate(),today.getMonth()+1,today.getFullYear()]);
  // Esta función se usará como controlador para recibir el cambio de fecha desde el componente Calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


       
    

    return (
        <div>
            <NavigationVar back="/"/>
            <div className="container-all">
            
            <h1 className="events-header">Eventos</h1>
            
                <div className="container-events">
                    

                    <div className="square-events">
                    <Calendar onDateChange={handleDateChange}/>
                    </div>


                    <div className="square-events">
                    <EventPerDate date = {selectedDate}/>
                    </div>

                </div>
            
                <h1 className="events-header">Recordatorios</h1>
                
                <div className="square-reminders">
                    <RemindersList id = {user}/>
                </div>


                <h1 className="events-header">Enviar propuesta de Evento</h1>
                
                <div className="square-proposals">
                    <div className="reminders-container">
                        <MakeProposal id = {user}/>
                    </div>
                    
                </div>
            </div>
        
        </div>
        
    )
}
