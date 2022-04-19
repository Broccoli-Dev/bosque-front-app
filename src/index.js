import React from 'react';
import ReactDOM from 'react-dom';
import BosqueApp from './BosqueApp';
import './styles/index.scss';

(function (global){
  const body = global.document.getElementById('root') || new HTMLBodyElement();
  ReactDOM.render(<BosqueApp/>, body);
  body.appendChild(body);
})(window);


