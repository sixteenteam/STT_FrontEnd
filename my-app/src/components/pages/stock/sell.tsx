import theme from '../../../themes/theme';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Back } from '../../../assets';
import Input from '../../common/Input';
import Button from '../../common/Button';

const StockSell = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
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
          <LiveChart>현재 1주당 가격 {'5154원'}</LiveChart>
          {/**그래프 띄워주기 */}
          <Input label="몇 주를 판매할까요?" />
          <SubTitle>현재 판매가능한 포인트 1230p</SubTitle>
        </Bottom>
      </div>
      <BtnWrap>
        <Button text="구매하기" />
      </BtnWrap>
    </Container>
  );
};

export default StockSell;

const BtnWrap = styled.div`
  padding: 24px;
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
  height: 90dvh;
  justify-content: space-between;
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
