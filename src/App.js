
import React, { useState } from 'react';
//import switch,   route etc. for routing 
import { Route, Routes, useLocation } from "react-router-dom";
import BoxAnimation from './pages/BoxAnimation';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<BoxAnimation />} />
    </Routes>
  );
}

export default App;
