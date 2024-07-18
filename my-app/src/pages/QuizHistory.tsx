import styled from 'styled-components';
import { Props } from '../App';
import { Arrow } from '../assets';
import { useGetQuizHistory } from '../api/quiz';
import { RightArrow } from '../assets';
import { useNavigate } from 'react-router-dom';

const QuizHistory = () => {
  const navigate = useNavigate();
  const { data: userHistoryQuestion } = useGetQuizHistory();
  const quizzes = userHistoryQuestion?.quizzes || [];

  return (
    <Wrapper>
      <ArrowIcon src={Arrow} onClick={() => navigate(-1)} />
      <LogoContainer>
        <LogoTitle>왜이러닝</LogoTitle>
      </LogoContainer>
      <TitleContainer>
        <p>이전 퀴즈 기록</p>
        <Button>{quizzes.length}</Button>
      </TitleContainer>
      <p className="date">2024년 7월 18일</p>
      <ContentContainer>
        {quizzes.map((item) => (
          <ContentWrapper key={item.id}>
            <p className="QA">Q.</p>
            <p>{item.quiz}</p>
            <RightArrowImg
              src={RightArrow}
              alt=""
              onClick={() => navigate(`/quiz/${item.id + 1}`)}
            />
          </ContentWrapper>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > .date {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    color: ${({ theme }) => theme.colors.light.gray80};
    font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
    padding-bottom: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoTitle = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.light.primary20};
  font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 15px;
`;

const TitleContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 5px;
  padding-bottom: 20px;
  > p {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    color: ${({ theme }) => theme.colors.light.gray80};
    font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
  }
`;

const Button = styled.button`
  border-radius: 16px;
  color: white;
  background-color: #2f53ff;
  border: none;
  outline: none;
  padding: 7px 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  > .QA {
    color: #2f53ff;
    font-weight: bold;
    font-size: 32px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightArrowImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: auto;
`;

export default QuizHistory;
