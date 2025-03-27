import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
