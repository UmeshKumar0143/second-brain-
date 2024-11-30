import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import './index.css'
import Register from './components/Register'

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
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Register text={"login"} />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
