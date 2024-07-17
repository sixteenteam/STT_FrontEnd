import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import SignUp from './pages/Signup';
import SocialKakao from './SocialKaKao';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/scul/users/login" element={<SocialKakao />} />
    </Routes>
  );
};

export default Router;
