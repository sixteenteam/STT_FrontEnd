import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/myPage';
import Quiz from './pages/Quiz';
import QuizHistory from './pages/QuizHistory';

const Router = () => {
  return (
    <Routes>
      <Route path="/myPage/:token" element={<MyPage />} />
      <Route path="/quiz/:questionNumber" element={<Quiz />} />
      <Route path="/quiz/history" element={<QuizHistory />} />
    </Routes>
  );
};

export default Router;
