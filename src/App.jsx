import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import DonorRegister from './pages/DonorRegister'
import SearchDonors from './pages/SearchDonors'
import EmergencyRequest from './pages/EmergencyRequest'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<DonorRegister />} />
            <Route path="/search" element={<SearchDonors />} />
            <Route path="/emergency" element={<EmergencyRequest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
