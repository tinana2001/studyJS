import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import CompContentContainer from './components/compContent/compContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          {/* <Route path="/CompContent" element={<CompContent store = {props.store}  />}/>
          <Route path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}/>  */}
            <Route path="/CompContent/:userId?" element={<CompContentContainer />}/>
            <Route path="/Dialogs/*" element={<DialogsContainer/>}/> 
            <Route path="/Users/*" element={<UsersContainer/>}/> 
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
