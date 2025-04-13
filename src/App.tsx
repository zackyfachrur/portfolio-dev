import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy } from "react";

// Layouts
import Navbar from "./layouts/Navbar"
const Footer = lazy(() => import("./layouts/Footer"))
const EmbedContact = lazy(() => import("./layouts/EmbedContact"))

// Pages
import Home from "./pages/home/index"
import Project from "./pages/project/index"
import Resume from "./pages/resume/index"
import Contact from "./pages/contact";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <EmbedContact />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
