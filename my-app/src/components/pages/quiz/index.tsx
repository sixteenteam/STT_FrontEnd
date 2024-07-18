import styled from 'styled-components';
import { Props } from '../../../App';
import Button from '../../common/Button';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../../utils';
import toast from 'react-hot-toast';
import { SolveQuizReqeust, QuizResponseType } from '../../../api/quiz';
import { useNavigate } from 'react-router-dom';

const router = '/quizzes';

const QuizComponent = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null); // 선택한 id
  const [selectedChoice, setSelectedChoice] = useState<string>(''); // 선택한 박스 text
  const [correctId, setCorrectId] = useState<number | null>(null);
  const [isSolved, setIsSolved] = useState<boolean>(false); // 풀었는지 확인
  const [questionNumber, setQuestionNumber] = useState<number>(3); // 현재 문제 번호
  const [solvedQuestion, setSolvedQuestion] = useState<number>(0); // 푼 문제 번호

  const useSolveQuiz = () => {
    return useMutation({
      mutationFn: (data: SolveQuizReqeust) =>
        instance.post<boolean>(`${router}/solve/${questionNumber}`, data),
      onSuccess: (res) => {
        if (res.data === true) {
          toast.success('퀴즈를 맞췄어요!');
          setCorrectId(selectedId);
          setIsSolved((prev) => !prev);
        } else {
          toast.error('퀴즈를 맞추지 못했어요..');
          setCorrectId((prev) => prev);
        }
      },
    });
  };

  useEffect(() => {
    navigate(`/quiz/${questionNumber}`);
  }, [questionNumber, navigate]);

  const useGetQuiz = () => {
    return useQuery({
      queryKey: ['useGetQuiz', questionNumber],
      queryFn: async () => {
        const { data } = await instance.get<QuizResponseType>(
          `${router}/${questionNumber}`,
        );
        return [data];
      },
    });
  };

  const { data: Quizs } = useGetQuiz();
  const { mutate: NextAnswer } = useSolveQuiz();

  const handleClick = (id: number, choice: string) => {
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
    setSelectedChoice((prevSelectedChoice) =>
      prevSelectedChoice === choice ? '' : choice,
    );
  };

  const nextClick = () => {
    NextAnswer({ answer: selectedChoice });
  };

  const onClick = () => {
    setQuestionNumber((prev) => prev + 1);
    setSolvedQuestion((prev) => prev + 1);
    setIsSolved((prev) => !prev);
  };

  const MAX_DAY_QUESTION_NUMBER = 5;

  return (
    <Wrapper>
      <LogoContainer>
        <LogoTitle>왜이러닝</LogoTitle>
      </LogoContainer>
      <TitleContainer>
        <Title>경제 퀴즈</Title>
        <button>
          {solvedQuestion}/{MAX_DAY_QUESTION_NUMBER}
        </button>
      </TitleContainer>
      {Quizs?.map((quiz) => (
        <QuizWrapper key={quiz.quizId}>
          <p className="QA">Q.</p>
          {solvedQuestion < 5 && <p className="question">{quiz.quiz}</p>}
          <QuestoinWrapper>
            {solvedQuestion === 5 ? (
              <AlertText>
                오늘 퀴즈를 다 푸셨습니다!! <br />
                내일 다시 도전해주세요.
              </AlertText>
            ) : (
              <>
                {' '}
                {[quiz.choice1, quiz.choice2, quiz.choice3, quiz.choice4].map(
                  (choice, choiceIndex) => (
                    <QuestoinBox
                      key={choiceIndex}
                      onClick={() =>
                        handleClick(quiz.quizId * 10 + choiceIndex, choice)
                      }
                      isSelected={selectedId === quiz.quizId * 10 + choiceIndex}
                      isCorrect={correctId === quiz.quizId * 10 + choiceIndex}
                    >
                      {choice}
                    </QuestoinBox>
                  ),
                )}
              </>
            )}
          </QuestoinWrapper>
        </QuizWrapper>
      ))}
      <ButtonContainer>
        <p className="navigate" onClick={() => navigate('/quiz/history')}>
          이전 퀴즈 기록 보러가기
        </p>
        {solvedQuestion === 5 ? (
          <Button text="내일 다시 도전해주세요" backgroundColor="#CCCCCC" />
        ) : (
          <>
            {isSolved ? (
              <Button text="다음 문제풀기" onClick={onClick} />
            ) : (
              <Button text="정답 확인하기" height="50px" onClick={nextClick} />
            )}
          </>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const QuizWrapper = styled.div`
  width: 100%;
  height: 100%;
  > .QA {
    color: #2f53ff;
    font-weight: bold;
    font-size: 32px;
  }
  > .question {
    font-size: 18px;
    font-weight: 400;
    padding-top: 7px;
  }
`;

const Title = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.light.gray80};
  font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
`;

const LogoTitle = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.light.primary20};
  font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
`;

const LogoContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
`;

const AlertText = styled.p<Props>`
  color: ${({ theme }) => theme.colors.light.gray80};
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontSizes.fontWeight.medium};
  padding-bottom: 230px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 5px;
  padding-bottom: 20px;
  > button {
    border-radius: 16px;
    color: white;
    background-color: #2f53ff;
    border: none;
    outline: none;
    padding: 5px 15px;
  }
`;

const QuestoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 15px;
  width: 100%;
  height: 100%;
`;

const QuestoinBox = styled.div<{ isSelected: boolean; isCorrect: boolean }>`
  width: 100%;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1.5px solid
    ${({ isSelected, isCorrect }) =>
      isCorrect ? '#2f53ff' : isSelected ? 'black' : '#e5e5e5'};
  color: #7f7f7f;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-top: 230px;
  > .navigate {
    font-size: 12px;
    color: #7f7f7f;
    text-decoration: underline;
    text-align: center;
    padding-bottom: 15px;
  }
`;

export default QuizComponent;
