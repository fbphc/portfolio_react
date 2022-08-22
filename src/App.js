import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";

import Projects from "./components/Projects";
import {ContactUs} from "./components/ContactUs";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
     
    </div>
  );
}

export default App;
