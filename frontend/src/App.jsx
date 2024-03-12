import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './main/pages/Landing';

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} /> 
      </Routes>
  </Router>
  )
}

export default App