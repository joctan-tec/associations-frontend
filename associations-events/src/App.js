import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ViewEventsStudent from './components/ViewEventsStudent.js';
import ViewScreenAssociation from "./components/ViewScreenAssociation"
function App() {

  const [userLogged, setUserLogged] = useState("null");
  // Esta función se usará como controlador para recibir el cambio de fecha desde el componente Calendar
  const handleLogin = (user) => {
    setUserLogged(user);
  };
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogged={handleLogin}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<ViewEventsStudent name = {userLogged}/>} />
          <Route path="/homeAso" element={<ViewScreenAssociation name = {userLogged}/>} />
        
        </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
