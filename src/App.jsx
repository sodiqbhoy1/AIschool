import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Courses from './components/Courses'
import Instructors from './components/Instructors'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
       <Route path='*' element={ <NotFound/>} />
       
       </Routes>
         </div>
  )
}

export default App
