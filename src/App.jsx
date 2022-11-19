import React from 'react';
import LandingPage from "./pages/LandingPage"
import AboutPage from './pages/AboutPage';
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
import PreviewLetter from './pages/PreviewLetter';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/partnerships" element={<Patnership />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/previewletter" element={<PreviewLetter />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FooterTwo />
    </>
  );
}
export default App;
