
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './NotFound'
import EventDetails from './pages/EventDetails'


function App() {
  return (
    <>
      <div className='w-full bg-gradient-to-b from-black/50 to-black px-[5vw]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
