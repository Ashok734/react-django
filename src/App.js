
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Blog from './Components/pages/Blog';
import Contact from './Components/pages/Contact';
import Mservices from './Components/pages/Mservices';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='mservices' element={<Mservices />} />
       <Route path='blog' element={<Blog />} />
       <Route path='contact' element={<Contact />} />
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
