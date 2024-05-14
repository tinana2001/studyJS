import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import {addPost} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

reportWebVitals();

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
//store.subscribe(()=>{
  //let state = store.getState();
 // renderEntireTree(state);
//})

reportWebVitals();
