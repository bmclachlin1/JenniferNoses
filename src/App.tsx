import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        <Footer />
    </Router>
  )
}

export default App
