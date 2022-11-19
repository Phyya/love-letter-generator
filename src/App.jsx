import { Routes, Route } from 'react-router';
import SurveyPage from './pages/SurveyPage';
import PricingPage from './pages/PricingPage';
import Patnership from './pages/Patnership/Patnership';
import TermsOfService from './pages/TermsOfService';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import PreviewLetter from './pages/PreviewLetter'
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CareerPage from './pages/CareerScreens/CareerPage'
import PositionDetails from './pages/CareerScreens/PositionDetails'
import RoleApplication from './pages/CareerScreens/RoleApplication'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import CookiePolicy from './pages/CookiePolicy';
import Checkout from './pages/Checkout/Checkout'
import Sitemap from './pages/SiteMap/SiteMap'

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
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/previewletter" element={<PreviewLetter />} />
        <Route path="/career" exact element={<CareerPage />} />
        <Route exact path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/position-details" exact element={<PositionDetails />} />
        <Route path="/role-application" exact element={<RoleApplication />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/sitemap' element={<Sitemap />}/>
        <Route path='/partnership' element={<Patnership />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </>
  );
}
export default App;
