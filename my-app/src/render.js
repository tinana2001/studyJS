import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addPost, updateNewPostChange} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
    </React.StrictMode>
  );
}

reportWebVitals();