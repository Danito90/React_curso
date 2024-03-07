import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import AppService from './App_separo_fact.jsx'
import CustomHook from './CustomHook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomHook/>
  </React.StrictMode>
)

// Tres soluciones diferentes, cambiar el import y el componente
// App -> el mas basico
// import CustomHook from './App_separo_fact.jsx' -> mas avanzado separo servicio
// import CustomHook from './CustomHook.jsx' -> el mejor usando customhook
