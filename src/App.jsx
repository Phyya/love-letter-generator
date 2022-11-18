import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;
