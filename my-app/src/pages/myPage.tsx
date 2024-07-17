import { useParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../components/common/Button';
import theme from '../themes/theme';
import { Pencil } from '../assets';
import { useProfile } from '../api/users';
import { useState } from 'react';
import { useUploadImg } from '../api/users';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MyPage = () => {
  const access_token = useParams<string>();
  localStorage.setItem('access_token', access_token.token || '');

  const { data: UserData } = useProfile();
  const { mutate: uploadImg } = useUploadImg();

  const navigate = useNavigate();
  localStorage.setItem('uuid', UserData?.userId || '');

  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImg(file, {
        onSuccess: () => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        },
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Top>
          <p>
            <WhereElearnTitle>왜이러닝</WhereElearnTitle>
            <Title>마이페이지</Title>
          </p>
          <ProfileWrap>
            <ChangeProfile>
              <ProfileImage
                src={
                  selectedImage
                    ? selectedImage.toString()
                    : UserData?.profileImage
                }
                alt=""
                width={80}
                height={80}
              />
              <Fix
                onClick={() => document.getElementById('imageUpload')?.click()}
              >
                <img src={Pencil} alt="" />
              </Fix>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </ChangeProfile>
            <ProfileContent>
              <Name>{UserData?.name}</Name>
              <Tier>{UserData?.tier}</Tier>
            </ProfileContent>
          </ProfileWrap>
          <Content>
            <p>등급 : {UserData?.tier}</p>
            <p>포인트 : {UserData?.score}</p>
          </Content>
        </Top>
        <StockContainer>
          <StockTitle>
            {UserData?.name}님은 <br /> 현재 <Point>{0}원</Point> 벌고있습니다
          </StockTitle>
          <Button
            text="모의투자 더 하러가기"
            onClick={() => {
              navigate('/stock');
            }}
          />
        </StockContainer>
        <Alarm>
          <div>경제 뉴스 알림 설정</div>
          <TimePicker />
        </Alarm>
      </Container>
    </LocalizationProvider>
  );
};

export default MyPage;

const ProfileImage = styled.img`
  border-radius: 50%;
`;

const Alarm = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const Top = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Name = styled.p`
  font-size: ${theme.fontSizes.body1};
  font-weight: 500;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  gap: 4px;
`;

const Fix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${theme.colors.light.primary20};
`;

const ChangeProfile = styled.div`
  position: relative;
  width: fit-content;
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

const Content = styled.div`
  display: flex;
  padding: 20px 22px;
  background-color: ${theme.colors.light.blue10};
  border-radius: 8px;
  justify-content: space-between;
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

const Point = styled.span`
  color: ${theme.colors.light.red20};
`;

const Tier = styled.div`
  background-color: ${theme.colors.light.primary20};
  color: #fff;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: ${theme.fontSizes.caption};
`;
