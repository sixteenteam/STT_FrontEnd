import { useQuery } from '@tanstack/react-query';
import { instance } from '../components/utils';

const router = '/quizzes';

const UUID = window.localStorage.getItem('uuid');

export interface QuizResponseType {
  quizId: number;
  quiz: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  reason: string;
  todaySolvedQuiz: number;
  answer: string;
}

export interface SolveQuizReqeust {
  answer: string;
}

interface Quiz {
  id: number;
  quiz: string;
  answer: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  reason: string;
  solvedAt: string;
}

interface QuizData {
  quizzes: Quiz[];
}

export const useGetQuizHistory = () => {
  return useQuery({
    queryKey: ['useGetQuizHistory'],
    queryFn: async () => {
      const { data } = await instance.get<QuizData>(`${router}/solved/${UUID}`);
      return data;
    },
  });
};
