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
  const [font, setFont] = useState("Kanit");

  return (
    <div className="App" data-theme={theme} data-font={font}>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home  setTheme={setTheme} 
                                      setFont={setFont} />} />
      <Route path="/about" element={<About  setTheme={setTheme} 
                                            setFont={setFont}/>} />
      <Route path="/projects" element={<Projects  setTheme={setTheme} 
                                                  setFont={setFont}/>} />
      <Route path="/skills" element={<Skills  setTheme={setTheme} 
                                              setFont={setFont}/>} />
      <Route path="/contact" element={<Contact  setTheme={setTheme} 
                                                setFont={setFont}/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
