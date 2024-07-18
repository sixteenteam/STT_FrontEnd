import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/myPage';
import Quiz from './pages/Quiz';
import QuizHistory from './pages/QuizHistory';
import Stock from './pages/stock';
import StockDetail from './components/pages/stock';
import StockBuy from './components/pages/stock/buy';
import StockSell from './components/pages/stock/sell';

const Router = () => {
  return (
    <Routes>
      <Route path="/myPage/:token" element={<MyPage />} />
      <Route path="/quiz/:questionNumber" element={<Quiz />} />
      <Route path="/quiz/history" element={<QuizHistory />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/stock/:id" element={<StockDetail />} />
      <Route path="/stock/:id/buy" element={<StockBuy />} />
      <Route path="/stock/:id/sell" element={<StockSell />} />
    </Routes>
  );
};

export default Router;
