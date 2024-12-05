//tictactoe

import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './tictactoe/board';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Board/>
    </div>
);

