import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './themecontext';
import "./index.css"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>

, document.getElementById('root'));


