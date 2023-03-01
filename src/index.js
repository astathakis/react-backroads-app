import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /* strict mode provides additional checks and renders twice
   only in development mode */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
