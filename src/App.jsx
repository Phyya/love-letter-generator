import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import SurveyPage from './pages/SurveyPage';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage';
import PreviewLetter from './pages/PreviewLetter';
import CookiePolicy from './pages/CookiePolicy';
import CareerPage from './pages/CareerScreens/CareerPage';
import PositionDetails from './pages/CareerScreens/PositionDetails';
import RoleApplication from './pages/CareerScreens/RoleApplication';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Sitemap from './pages/SiteMap/SiteMap';
import Faqpage from './pages/Faqpage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPopup from './components/CookiesPopup';
import { ModalContent } from './components/newsleeter/newslettercontent';
import { NewsLetterModal } from './components/newsleeter/newslettermodal';

function App() {
  const [open, isOpen] = useState(false);
  return (
    <>
      <NewsLetterModal isOpen={isOpen} open={open}>
        <ModalContent isOpen={isOpen} open={open} />
      </NewsLetterModal>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/contactus" element={<ContactPage />} />
        <Route exact path="/survey" element={<SurveyPage />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/partnerships" element={<Patnership />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/previewletter" element={<PreviewLetter />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route exact path="/cookie-policy" element={<CookiePolicy />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="*" element={<ErrorPage />} />
        <Route exact path="/sitemap" element={<Sitemap />} />
        <Route exact path="/faq" element={<Faqpage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
      <CookiesPopup />
    </>
  );
}
export default App;
