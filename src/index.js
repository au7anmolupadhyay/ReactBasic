import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Header from './components/header';
import Item from './components/items';
import Button from './components/button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='card'>
        {/* <Counter/> */}
        <Header heading = "TODO List"/>
        <Item completed = "true" text = "Eat"/>
        <Item text = "Play Cricket"/>
        <Item text = "Sleep"/>
        <Item text = "Code"/>
        <Item text = "Eat"/>
        <Button/>
    </div>
);