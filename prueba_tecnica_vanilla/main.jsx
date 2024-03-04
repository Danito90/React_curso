import {createRoot} from "react-dom/client"
import { App } from './src/App.jsx'

// Donde quiero renderizar mi aplicacion: document.getElementById('root')
const root = createRoot(document.getElementById('app'))
root.render(<App/>)