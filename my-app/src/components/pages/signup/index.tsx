import Input from '../../common/Input';
import Button from '../../common/Button';
import styled from 'styled-components';
import { Props } from '../../../App';
import { useState } from 'react';
import { useUserStore } from '../../store/auth';
import SocialKakao from '../../../SocialKaKao';
import { useSignup } from '../../../api/users';

export default function SignUp() {
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const email = useUserStore((state) => state.email);
  const { mutate: userSignup } = useSignup();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userSignup({
      name,
      birth,
      email,
    });
    setName('');
    setBirth('');
  };

  return (
    <Wrapper>
      <Container>
        <SignTitle>
          <span>왜이러닝</span>에 회원가입하기
        </SignTitle>
        <SocialKakao />
        <FormContainer onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              placeholder="ex) 김주원"
              width="100%"
              label="이름을 입력해 주세요."
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              type="text"
              placeholder="ex) 2006-03-19"
              label="생년월일을 입력해 주세요."
              width="100%"
              value={birth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBirth(e.target.value)
              }
            />
            <Input label="사용자 이메일" width="100%" value={email} disabled />
          </InputWrapper>
          <Button type="submit" text="회원가입" width="100%" />
        </FormContainer>
      </Container>
    </Wrapper>
  );
}
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
  padding-top: 30px;
`;
