import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import {UglyThingsContextProvider} from "./Uglythingscontext"

ReactDOM.render(
    <UglyThingsContextProvider>
        <App />
    </UglyThingsContextProvider>
        
    , document.getElementById('root'));

