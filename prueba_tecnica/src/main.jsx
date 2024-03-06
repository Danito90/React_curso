import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CustomHook from './CustomHook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomHook/>
  </React.StrictMode>
)
