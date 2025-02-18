import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Weather from '../Components/Weather'
import '../Css/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app'> 
      <Weather/>
    </div>
  </StrictMode>,
)
