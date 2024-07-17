import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Kakao, LogoText } from '../assets'; // Kakao 아이콘 이미지
import theme from '../themes/theme';
import SearchInput from '../components/search';

interface DataProp {
  title: string;
  company: string;
  link: string;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

const NewsPage = () => {
  const [title, setTitle] = useState<string>('');
  const [data] = useState<DataProp[]>([]);

  useEffect(() => {
    // Kakao 초기화
    if (window.Kakao) {
      window.Kakao.cleanup();
      window.Kakao.init('b17785da085d35dbc9e83392fb2015fb');
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  const handleChange = (text: string) => {
    setTitle(text);
  };

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'localhost:3000',
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: 'localhost:3000',
          },
        },
      ],
    });
  };

  const filteredNews = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(title.toLowerCase()) ||
      item.company.toLowerCase().includes(title.toLowerCase())
    );
  });

  return (
    <div>
      <LogoImg src={LogoText} alt="로고 이미지" />
      <QuizText>
        아직 퀴즈를 풀지 않으셨네요!
        <QuizLink href="/quiz">퀴즈 풀러가기</QuizLink>
      </QuizText>
      <TodayNewsText>오늘의 경제 뉴스</TodayNewsText>
      <NewsContent>
        <div>
          <Company>조선일보</Company>
          <NewsContentText>오늘의 뉴스 제목</NewsContentText>
        </div>
        <img
          src={Kakao}
          width={16}
          height={16}
          alt="카카오 아이콘"
          onClick={shareKakao}
        />
      </NewsContent>
      <PastText>지난 경제 뉴스</PastText>
      <Line />
      <PastNewsWrap>
        <SearchInput
          onChange={handleChange}
          placeholder="보고싶은 뉴스를 검색해주세요"
          name="title"
          value={title}
        />
        {filteredNews.map((item, index) => (
          <NewsContent key={index} href={item.link}>
            <Company>{item.company}</Company>
            <NewsContentText>{item.title}</NewsContentText>
          </NewsContent>
        ))}
      </PastNewsWrap>
    </div>
  );
};

export default NewsPage;

const QuizText = styled.div`
  background-color: ${theme.colors.light.gray30};
  font-size: ${theme.fontSizes.caption};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const QuizLink = styled.a`
  color: ${theme.colors.light.blue30};
  font-weight: bold;
  margin-left: 6px;
`;

const LogoImg = styled.img`
  padding: 20px 0px 4px 24px;
`;

const TodayNewsText = styled.p`
  font-size: ${theme.fontSizes.h3};
  font-weight: bold;
  margin-top: 8px;
  margin-left: 24px;
`;

const PastText = styled.p`
  font-size: ${theme.fontSizes.h5};
  font-weight: bold;
  margin-left: 24px;
`;

const Line = styled.div`
  border-top: 1px solid ${theme.colors.light.gray40};
  margin-left: 24px;
`;

const PastNewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
`;

const NewsContent = styled.a`
  margin-top: 8px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 12px 24px;
  background-color: ${theme.colors.light.blue10};
  cursor: pointer;
`;

const Company = styled.p`
  font-size: ${theme.fontSizes.caption};
  font-weight: 500;
`;

const NewsContentText = styled.p`
  font-size: ${theme.fontSizes.body2};
  font-weight: 500;
`;
