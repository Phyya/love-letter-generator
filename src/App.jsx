import React from 'react';
import { Routes, Route } from 'react-router';
import SurveyPage from './pages/SurveyPage';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/survey" element={<SurveyPage />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/partnerships" element={<Patnership />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/previewletter" element={<PreviewLetter />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route exact path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
      </Routes>
    </>
  );
}
export default App;
