import React from 'react';
import TermsOfService from './pages/TermsOfService';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/termsofservice" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default App;
