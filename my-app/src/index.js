import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import {addPost} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import StoreContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) =>{
  root.render(
    <React.StrictMode>
      {/* <StoreContext.Provider value={store}> */}
      <App store={store} dispatch={store.dispatch.bind(store)} />
      {/* <App/> */}
      {/* </StoreContext.Provider> */}
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
