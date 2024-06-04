
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bubbles from './components/Bubbles'
import './index.css' 

function App() {



  return (
    
    <BrowserRouter>
    <Routes>
      
        <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
