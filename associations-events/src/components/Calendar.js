import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import backArrow from '../assets/back-arrow.png';
import nextArrow from '../assets/next-arrow.png';
import { createRoot } from 'react-dom';



function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return true; // Es bisiesto
    } else {
        return false; // No es bisiesto
    }
};

//function selectDay(num) {
 //   console.log(num)
//};


export default function Calendar(props) {

    const containerRef = useRef(null);
    var date = new Date()
    const [currentDate,onChange] = useState(date);
    const rows = 6;
    const columns = 7;
    var selectedDay = currentDate.getDate();
    var year = currentDate.getFullYear();
    

    const selectDay = (num) => {
        console.log(num);
        selectedDay = num;

        if (props.onDateChange) {
          props.onDateChange([selectedDay,currentDate.getMonth()+1,year]); // Llama a la función de controlador proporcionada en las props
        }
        
    }
    const months = {
        0: ["Enero", 31, 11, 1],
        1: ["Febrero", esBisiesto(year) ? 29 : 28, 0, 2],
        2: ["Marzo", 31, 1, 3],
        3: ["Abril", 30, 2, 4],
        4: ["Mayo", 31, 3, 5],
        5: ["Junio", 30, 4, 6],
        6: ["Julio", 31, 5, 7],
        7: ["Agosto", 31, 6, 8],
        8: ["Septiembre", 30, 7, 9],
        9: ["Octubre", 31, 8, 10],
        10: ["Noviembre", 30, 9, 11],
        11: ["Diciembre", 31, 10, 0]
    };

    const nextMonth = () => {
        let currentMonth = currentDate.getMonth();
        if (currentMonth == 11) {
            currentMonth = 0
            year += 1
        }else{
            currentMonth += 1 
        }
        
 
  
        onChange(new Date(year,currentMonth));
    }

    const previousMonth = () => {
        let currentMonth = currentDate.getMonth();
        if (currentMonth == 0) {
            currentMonth = 11
            year -= 1
        }else{
            currentMonth -= 1
        }

        onChange(new Date(year,currentMonth));
    }
    
    
    const daysOfweek = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"]

    useEffect(() => {
        // Crear el HTML dinámico usando JSX

        const primerDiaDeLaSemana = new Date(year,currentDate.getMonth(), 0).getDay();
        const daysHTML = [];
        let isDone = false;
        let count = 1;
        let limit = months[currentDate.getMonth()][1];
        let keyCount = 0;
        for (let i = 0; i < rows; i++) {
          const row = [];
          for (let j = 0; j < columns; j++) {
            const currentCount = count; // Captura el valor actual de count
            if (count <= limit) {
              if (primerDiaDeLaSemana === j || isDone) {
                row.push(
                  <div className="days-number" key={keyCount}>
                    <button
                      type="button"
                      onClick={() => selectDay(currentCount)}
                      className="day-button"
                    >
                      {count}
                    </button>
                  </div>
                );
                count += 1;
                isDone = true;
              } else {
                row.push(
                  <div className="days-number" key={keyCount}>
                    <span></span>
                  </div>
                );
              }
            } else {
              row.push(
                <div className="days-number" key={keyCount}>
                  <span></span>
                </div>
              );
            }
            keyCount += 1;
          }
          
          daysHTML.push(<div className="days-line" key={i}>{row}</div>);
        }
        const root = createRoot(containerRef.current);
        // Renderizar el JSX dentro del contenedor utilizando ReactDOM.createRoot
        root.render(<>{daysHTML}</>);

        
      }, [currentDate, selectedDay]);
    
    

    return (
        <div className="calendar-square">
            <div className="header-calendar">
                <h2 id="month-year">{months[currentDate.getMonth()][0] + " " + year}</h2>
                <div className="buttons-header-calendar">
                    <div className="arrows-container-calendar">
                        <div id="back-arrow" onClick={previousMonth}>
                            <img src={backArrow}/>
                        </div>
                    </div>

                    <div className="arrows-container-calendar">
                        <div id="next-arrow" onClick={nextMonth}>
                            <img src={nextArrow} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="short-days-line">

                <div className="days-short">
                    <span>{daysOfweek[0]}</span>
                </div>

                <div className="days-short">
                    <span>{daysOfweek[1]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[2]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[3]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[4]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[5]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[6]}</span>
                </div>

            </div>
            
            <div className="line-calendar"></div>
            
            <div ref={containerRef} className="containerDays">
            </div>

            

           

                
           


        
        </div>
        
    )
}



