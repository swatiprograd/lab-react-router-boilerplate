import './App.css';
import Navbar from "./components/Navbar"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import About from "./components/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;