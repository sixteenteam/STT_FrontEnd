import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import SocialKakao from './SocialKaKao';
import MyPage from './pages/myPage';
import Quiz from './pages/Quiz';
import QuizHistory from './pages/QuizHistory';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/scul/users/login" element={<SocialKakao />} />
      <Route path="/myPage/:token" element={<MyPage />} />
      <Route path="/quiz/:questionNumber" element={<Quiz />} />
      <Route path="/quiz/history" element={<QuizHistory />} />
    </Routes>
  );
};

export default Router;
