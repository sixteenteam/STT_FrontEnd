import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  marginX?: string;
  children: ReactNode;
}

const Layout = ({ marginX = '16.5vw', children }: LayoutProps) => {
  return <Wrapper marginX={marginX}>{children}</Wrapper>;
};

interface WrapperProps {
  marginX: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  margin: 100px 0;
  padding: ${({ marginX }) => `0 ${marginX}`};
  padding-top: 50px;
  @media screen and (max-width: 900px) {
    padding: 0 6.5vw;
  }
`;

export default Layout;
