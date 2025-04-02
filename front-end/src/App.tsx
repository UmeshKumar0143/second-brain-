import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Sign from './components/Sign'
import Tweet from './components/Tweets'
import Layout from './components/Layout'
import Hero from './components/Hero'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Hero/>} />
      <Route path={'tweets'} element={<Tweet/>}  />
    </Route>
    <Route path='/register' element={<Sign />}/>
    <Route path='/login' element={<Sign text={"login"} />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
