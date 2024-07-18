import theme from '../../../themes/theme';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Back, Graph } from '../../../assets';
import Button from '../../../components/common/Button';

const StockDetail = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Top>
        <p>
          <WhereElearnTitle>왜이러닝</WhereElearnTitle>
          <BackBtn>
            <img src={Back} alt="" onClick={() => navigate(-1)} />
            <Title>모의투자</Title>
          </BackBtn>
        </p>
      </Top>
      <Bottom>
        <LiveChart>실시간 차트</LiveChart>
        <img src={Graph} alt="" />
        <SubTitle>위 투자는 모의투자입니다</SubTitle>
      </Bottom>
      <BtnWrap>
        <Button text="판매하기" onClick={() => navigate('sell')} />
        <Button text="구매하기" onClick={() => navigate('buy')} />
      </BtnWrap>
    </Container>
  );
};

export default StockDetail;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  gap: 16px;
`;

const SubTitle = styled.p`
  font-size: ${theme.fontSizes.caption};
`;

const BackBtn = styled.div`
  display: flex;
  gap: 8px;
`;

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
