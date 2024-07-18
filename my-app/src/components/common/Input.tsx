import styled from 'styled-components';
import { Props } from '../../App';
import { useRef, useState, useEffect } from 'react';

interface ContainerProps {
  width?: string | number;
  height?: string | number;
  theme: Props;
}

const Input = ({
  label,
  width = '100%',
  height = '48px',
  type = 'text',
  ...props
}: any) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [borderColor, setBOR] = useState('');
  useEffect(() => {
    if (ref.current) {
      if (ref.current.value !== '') {
        setBOR('#2f53ff');
      } else {
        setBOR('#e5e5e5');
      }
      ref.current.style.borderColor = borderColor;
    }
  }, [ref.current?.value]);
  return (
    <Wrapper>
      {label && <p className="label">{label}</p>}
      <InputContainer width={width} height={height}>
        <input
          ref={ref}
          type={type !== 'password' ? type : 'password'}
          {...props}
        />
      </InputContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  > .label {
    margin-bottom: 7px;
    font-size: ${({ theme }) => theme.fontSizes.body3};
    font-weight: ${({ theme }) => theme.fontSizes.fontWeight.regular};
    color: ${({ theme }) => theme.colors.dark.gray50};
  }
`;

const InputContainer = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid #ccc;

  > input {
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.body2};
    font-weight: ${({ theme }) => theme.fontSizes.fontWeight.regular};
    padding: 10px 20px;
    border: none;
    background: none;
  }
`;

export default Input;
