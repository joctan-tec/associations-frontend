import React, { useState } from "react";
import '../App.css';

export default function Proposal(props) {





    return (
        <div className="center-line">
        <div className="proposal-lines">
            <div className="proposal-topic-content">
                <h3>{props.topic}</h3>
            </div>

            <div className="proposal-target-content">
                <h3>{props.target}</h3>
            </div>

            <div className="proposal-ideas-content">
                <h3>{props.ideas}</h3>
            </div>

            <div className="proposal-approve-button">
                <button className="button-approve">Aprobar</button>
            </div>

            <div className="line-proposal"></div>
            
        </div>
            
        </div>
    )
}