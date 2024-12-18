import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import './index.css'
import Sign from './components/Sign'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={  <div className='sm:flex '>
      <div>
      <Sidebar/>
      </div>
      <div className='w-full'>
      <Navbar/>
      <Hero/>
      </div>
    </div>}/>
    <Route path='/register' element={<Sign />}/>
    <Route path='/login' element={<Sign text={"login"} />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
