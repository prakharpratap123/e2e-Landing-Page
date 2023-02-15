import React from "react";
import { Blogs, Home, Login, Navbar, Partners, Register, Solution } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
