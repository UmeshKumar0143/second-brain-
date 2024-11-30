import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import './index.css'

function App() {

  return (
    <div className='sm:flex '>
      <div>
      <Sidebar/>
      </div>
      <div className='w-full'>
      <Navbar/>
      <Hero/>
      </div>
    </div>
  )
}

export default App
