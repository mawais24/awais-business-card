import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonImage from './component/PersonImage'
import PersonDetails from './component/PersonDetails'
import PersonContact from './component/PersonContact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <PersonImage />
        <div className='person-details'>
          <PersonContact />
          <PersonDetails />
        </div>
      <Footer />
    </div>
  )
}

export default App
