import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import './index.css'

function App() {

  return (
    <div className='flex '>
      <div>
      <Sidebar/>
      </div>
      <Navbar/>
    </div>
  )
}

export default App
