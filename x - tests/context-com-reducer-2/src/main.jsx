import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ColorAndCounterContextProvider } from './context/ColorAndCounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ColorAndCounterContextProvider>
      <App />
    </ColorAndCounterContextProvider>
  </React.StrictMode>,
)
