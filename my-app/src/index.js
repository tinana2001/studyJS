import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import {addPost} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      <Provider store={store}>
      {/* <App store={store} dispatch={store.dispatch.bind(store)} /> */}
      <App/>
      </Provider>
    </React.StrictMode>
  );
}

reportWebVitals();

renderEntireTree(store.getState());
// store.subscribe(renderEntireTree);
//store.subscribe(()=>{
  //let state = store.getState();
 // renderEntireTree(state);
//})

reportWebVitals();
