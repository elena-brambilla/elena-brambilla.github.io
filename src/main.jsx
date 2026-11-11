import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ScrollToTop from './components/ui/ScrollToTop.jsx'

import App from './App.jsx'
import Home from './components/home.jsx'
import About from './components/pages/About.jsx'
import MyProjects from './components/pages/MyProjects.jsx'
import Project1 from './components/pages/Project1.jsx'
import Project2 from './components/pages/Project2.jsx'
import Project3 from './components/pages/Project3.jsx'
import Project4 from './components/pages/Project4.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-projects/food-explorer" element={<Project1 />} />
        <Route path="/my-projects/mood-app" element={<Project2 />} />
        <Route path="/my-projects/nexus" element={<Project3 />} />
        <Route path="/my-projects/mat" element={<Project4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
