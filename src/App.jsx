import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import { useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";


function App() {
  const [theme, setTheme] = useState("tomato");

  return (
    <div className="App" data-theme={theme}>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home setTheme={setTheme} />} />
      <Route path="/about" element={<About setTheme={setTheme}/>} />
      <Route path="/projects" element={<Projects setTheme={setTheme}/>} />
      <Route path="/skills" element={<Skills setTheme={setTheme}/>} />
      <Route path="/contact" element={<Contact setTheme={setTheme}/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
