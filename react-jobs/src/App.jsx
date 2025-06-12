import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/jobs' element={ <JobsPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </>
  )
}

export default App