import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import CompContent from './components/compContent/compContent';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          <Route path="/CompContent" element={<CompContent/>}/>
          <Route path="/Dialogs/*" element={<Dialogs/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
