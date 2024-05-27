import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import CompContent from './components/compContent/compContent';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { addPost} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          {/* <Route path="/CompContent" element={<CompContent store = {props.store}  />}/>
          <Route path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}/>  */}
            <Route path="/CompContent" element={<CompContent />}/>
            <Route path="/Dialogs/*" element={<DialogsContainer/>}/> 
            <Route path="/Users/*" element={<UsersContainer/>}/> 
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
