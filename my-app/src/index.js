import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts=[
  {id: 1, message:'Сегодня стащил со стола креветки. Доволен', likecount:5},
  {id:2, message:'Всем привет! Теперь и я тут!', likecount:2},
  {id:3, message:'Добавляйтесь в друзья', likecount:1}
]
let dialogs=[
  {id:1, name:'Эльф'},
  {id:2, name:'Барсик'},
  {id:3, name:'Чуча'},
  {id:4, name:'Черныш'}
]
let messages=
[
  {id:1, message:'Мяу'},
  {id:2, message:'Жду тебя на кухне'},
  {id:3, message:'Как твои дела?'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
