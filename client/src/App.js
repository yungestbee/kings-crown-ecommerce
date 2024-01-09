import React from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layouts from './components/Layouts';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
