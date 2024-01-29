import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import CompContent from './components/compContent/compContent';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <CompContent/>
    </div>
  );
}



export default App;
