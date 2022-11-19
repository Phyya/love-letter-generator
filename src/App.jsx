import { Routes, Route } from 'react-router';
import SurveyPage from './pages/SurveyPage';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import FooterTwo from './components/FooterTwo';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PreviewLetter from './pages/PreviewLetter'
import CareerPage from './pages/CareerScreens/CareerPage'
import PositionDetails from './pages/CareerScreens/PositionDetails';
import RoleApplication from './pages/CareerScreens/RoleApplication'
import AboutPage from './pages/AboutPage'
import Faqpage from './pages/Faqpage';

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
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/previewletter" element={<PreviewLetter />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<Faqpage />} />
      </Routes>
      <FooterTwo />
    </>
  );
}
export default App;
