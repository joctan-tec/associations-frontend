import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import on from '../assets/switch_on.png';
import off from '../assets/switch_off.png';


export default function Event(props) {
    const [stateButtom,changeState] = useState(false);

    const swapSwitch = () => {
        changeState(!stateButtom);
    };

    const [stateButtom2,changeState2] = useState(false);

    const swapSwitch2 = () => {
        changeState2(!stateButtom2);
    };
    return (
        <div className="event-container">
            <div className="header-event">
                <div className="one-event">
                </div>
            </div>
            <h3 id="event-name">{props.name}</h3>
            <div className="individual">
               <div className="header-calendar">
                    <h4 id="name">Hora: {props.hour}</h4>
                    <div className="container-buttom">
                    <div className="switch-container-calendar">
                        <div id="switch-buttom">
                            <img src={stateButtom?on:off} onClick={swapSwitch}/>
                        </div>
                    
                    </div>
                    <p className="text-event-info">Me interesa</p>
                    </div>
    
                </div>
                <div className="header-calendar">
                    <h4 id="name">Ubicación:{props.location}</h4>
                    <div className="container-buttom">
                    <div className="switch-container-calendar">
                        <div id="switch-buttom">
                            <img src={stateButtom2?on:off} onClick={swapSwitch2}/>
                        </div>
                    
                    </div>
                    <p className="text-event-info">Inscribirse</p>
                    </div>
    
                </div>
                
            </div>
            <div className="line-calendar"></div>

        </div>
    
    )
}