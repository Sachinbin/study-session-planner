import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormPorvider } from './context/Form.jsx'

createRoot(document.getElementById('root')).render(
    <FormPorvider>
        <App />
    </FormPorvider>
)
