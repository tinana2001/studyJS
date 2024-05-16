import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import CompContent from './components/compContent/compContent';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { addPost} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          <Route path="/CompContent" element={<CompContent store = {props.store}  />}/>
          {/* потом тут не забыть написать вместо всего store = {props.store} */}
          <Route path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}/> 
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
