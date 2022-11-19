import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/partnerships" element={<Patnership />} />
      </Routes>
    </>
  );
export default App;
