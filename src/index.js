import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
        <App />
    </CarritoProvider>
);