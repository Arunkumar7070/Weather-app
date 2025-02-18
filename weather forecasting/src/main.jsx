import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Weather from '../Components/Weather'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app'> 
      <Weather/>
    </div>
  </StrictMode>,
)
