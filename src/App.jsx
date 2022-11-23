import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import SurveyPage from './pages/SurveyPage';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage';
import PreviewLetter from './pages/PreviewLetter/PreviewLetter';
import CookiePolicy from './pages/CookiePolicy';
import CareerPage from './pages/CareerScreens/CareerPage';
import PositionDetails from './pages/CareerScreens/PositionDetails';
import RoleApplication from './pages/CareerScreens/RoleApplication';
import ApiDocs from './pages/ApiDocs';
import Uptime from './pages/Uptime';
import Incidents from './pages/Incidents';
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
import ResetPasswordPage from './pages/ResetPasswordPage';
import Checkout from './pages/Checkout/Checkout';
import Dashboard from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { user, authIsReady, dispatch } = useAuthContext();
  console.log(authIsReady);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({ type: 'LOGIN', payload: user });
    }
    dispatch({ type: 'AUTH_IS_READY', payload: user });
  }, []);
  const [open, isOpen] = useState(false);
  return (
    <div>
      {authIsReady && (
        <>
          <NewsLetterModal isOpen={isOpen} open={open}>
            <ModalContent isOpen={isOpen} open={open} />
          </NewsLetterModal>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/contactus" element={<ContactPage />} />
            <Route
              exact
              path="/survey"
              element={user ? <SurveyPage /> : <Navigate to="/signin" />}
            />
            <Route exact path="/pricing" element={<PricingPage />} />
            <Route exact path="/partnerships" element={<Patnership />} />
            <Route exact path="/termsofservice" element={<TermsOfService />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/previewletter" element={<PreviewLetter />} />
            <Route path="/career" exact element={<CareerPage />} />
            <Route exact path="/cookie-policy" element={<CookiePolicy />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route
              path="/position-details"
              exact
              element={<PositionDetails />}
            />
            <Route
              path="/role-application"
              exact
              element={<RoleApplication />}
            />
            <Route path="/apidocs" exact element={<ApiDocs />} />
            <Route path="/uptime" exact element={<Uptime />} />
            <Route path="/incidents" exact element={<Incidents />} />
            <Route exact path="*" element={<ErrorPage />} />
            <Route exact path="/sitemap" element={<Sitemap />} />
            <Route exact path="/faq" element={<Faqpage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route
              exact
              path="/profile"
              element={user ? <ProfilePage /> : <Navigate to="/signin" />}
            />
            <Route
              exact
              path="/reset-password"
              element={<ResetPasswordPage />}
            />
            <Route
              exact
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/signin" />}
            />
            <Route
              path="/checkout"
              element={user ? <Checkout /> : <Navigate to="/signin" />}
            />
          </Routes>
          <CookiesPopup />
        </>
      )}
    </div>
  );
}
export default App;
