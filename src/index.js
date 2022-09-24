import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelloWorld } from './App';
import Prova from './Test';
import NavBlock from './Header/nav';
import HeaderBlock from './Header/header';
import DividerBlock from './Header/divider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <HelloWorld/>
    <Prova></Prova> */}
    <NavBlock></NavBlock>
    <HeaderBlock></HeaderBlock>
    <DividerBlock></DividerBlock>
  </React.StrictMode>
);
