import React, { useState } from 'react';
import styled from 'styled-components';
import { Props } from '../App';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useLogin } from '../api/users';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const { mutate: userLogin } = useLogin();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userLogin({
      email: email,
    });
    setEmail('');
  };
  return (
    <Wrapper>
      <Container>
        <SignTitle>
          <span>왜이러닝</span>에 로그인하기
        </SignTitle>
        <FormContainer onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              placeholder="12345678@gmail.com"
              width="100%"
              label="이메일을 입력해 주세요"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </InputWrapper>
          <Button type="submit" text="로그인" width="100%" />
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

const SignTitle = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.dark.gray10};
  font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
  > span {
    font-weight: ${({ theme }) => theme.fontSizes.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.light.primary20};
  }
  padding-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 520px;
`;

const FormContainer = styled.form`
  width: 100%;
`;

export default Login;
