import theme from '../themes/theme';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Top>
        <p>
          <WhereElearnTitle>왜이러닝</WhereElearnTitle>
          <Title>모의투자</Title>
          <Asset>나의 자산 : {'84651원'}</Asset>
        </p>
      </Top>
      <StockContainer>
        <StockTitle>
          {'강태양'}님은 <br /> 현재 <Point>{15620}원</Point> 벌고있습니다
        </StockTitle>
      </StockContainer>
      <Bottom>
        <LiveChart>실시간 차트</LiveChart>
        {
          <StockList
            onClick={() => {
              navigate(`${1234}`);
            }}
          >
            <Left>
              <p>순위</p>
              <p>회사이름</p>
            </Left>
            <p>가격</p>
          </StockList>
        }
      </Bottom>
    </Container>
  );
};

export default Stock;

const LiveChart = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Bottom = styled.div`
  padding: 0px 24px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Asset = styled.p`
  font-size: ${theme.fontSizes.body2};
`;

const Left = styled.div`
  display: flex;
  gap: 12px;
`;

const StockList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.colors.light.gray20};
  padding: 10px;
  background-color: ${theme.colors.light.gray30};
  border-radius: 8px;
  font-size: ${theme.fontSizes.caption};
`;

const Point = styled.span`
  color: ${theme.colors.light.red20};
`;

const StockContainer = styled.div`
  background-color: ${theme.colors.light.primary10};
  padding: 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

const StockTitle = styled.p`
  font-size: ${theme.fontSizes.h5};
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
`;

const WhereElearnTitle = styled.p`
  font-size: ${theme.fontSizes.body2};
  font-weight: 700;
  color: ${theme.colors.light.primary20};
`;

const Title = styled.p`
  font-size: ${theme.fontSizes.h3};
  font-weight: 700;
`;

const Top = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
