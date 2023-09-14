import React, { useState } from "react";
import '../App.css';

export default function Reminders(props) {



    

    return (
        <div className="reminder-container">
            <div className="reminder-tittle">
                <p>{props.tittle}</p>
            </div>

            <div className="reminder-text">
                <p>{props.message}</p>
            </div>

            <div className="line-calendar"></div>
        </div>
        
    )
}