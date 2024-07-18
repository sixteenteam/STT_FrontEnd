import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Logo } from '../assets';
import { Outlet, useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPage = () => {
  const imageText = { image: Logo };
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image src={imageText.image} alt="Display" />
      <div>
        계정이 있으신가요?
        <GoAuth onClick={() => navigate('/login')}> 로그인하기</GoAuth>
      </div>
      <div>
        계정이 없으신가요?
        <GoAuth onClick={() => navigate('/signup')}> 회원가입하기</GoAuth>
      </div>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  > div {
    opacity: 0;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
    animation-delay: 1.7s;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const GoAuth = styled.span`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export default LandingPage;
