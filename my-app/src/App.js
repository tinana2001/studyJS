import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import CompContent from './components/compContent/compContent';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { addPost } from './redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
        <Routes>
          <Route path="/CompContent" element={<CompContent profilePage={props.state.profilePage} addPost={props.addPost} newPostText={props.newPostText} updateNewPostChange={props.updateNewPostChange}/>}/>
          <Route path="/Dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
