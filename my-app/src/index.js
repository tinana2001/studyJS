import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
// import {addPost} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostChange={store.updateNewPostChange.bind(store)}/>
    </React.StrictMode>
  );
}

reportWebVitals();

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

reportWebVitals();
