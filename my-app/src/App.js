import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Content from './components/Header';
import CompContent from './components/compContent';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <Content/>
      <CompContent/>
    </div>
  );
}



export default App;
