// require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const appElmeent = document.getElementById('root');

ReactDOM(<App/>, appElement);
