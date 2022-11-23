
import React, { useState, useEffect } from 'react';
//import switch,   route etc. for routing 
import { Route, Routes, useLocation } from "react-router-dom";
import BoxAnimation from './pages/BoxAnimation';
import Home from './pages/Home';

import { menuAtom } from './atom/menu';
import { useAtom } from 'jotai';
import { activateMenu } from './atom/menu';
import Navbar from './components/Navbar';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, setMenu] = useAtom(menuAtom);
  const location = useLocation();

  useEffect(() => {
    activateMenu(location.pathname, menu, setMenu);
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (

    <div className='body-container font-sans grid md:grid-cols-8'>
      {/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
      <main className=' md:col-span-7 min-h-screen'>
        <Routes>
          <Route exact path="/" element={<BoxAnimation />} />
          {/* <Route path="/box-animation" element={<BoxAnimation />} /> */}
        </Routes>
      </main>
    </div>

  );
}

export default App;
