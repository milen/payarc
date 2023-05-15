import React from 'react'
import ReactDOM from 'react-dom/client'

import "./Styles/app.scss";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
