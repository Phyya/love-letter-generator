import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import FooterTwo from './components/FooterTwo';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import CareerPage from './pages/CareerScreens/CareerPage';
import PositionDetails from './pages/CareerScreens/PositionDetails';
import RoleApplication from './pages/CareerScreens/RoleApplication';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/partnerships" element={<Patnership />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
      </Routes>
      <FooterTwo />
    </>
  );
}
export default App;
