import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  color?: string;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  text,
  onClick,
  width = '100%',
  color,
  backgroundColor,
  type = 'submit',
}: ButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
      type={type}
    >
      {text}
    </ButtonWrapper>
  );
};

interface ButtonWrapperProps {
  width: string;
  color?: string;
  backgroundColor?: string;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border-radius: 12px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.light.primary20};
  color: ${({ color }) => color || '#fff'};
  border: none;
  width: ${({ width }) => width};
  padding: 15px 20px;
  font-weight: bold;
`;

export default Button;
