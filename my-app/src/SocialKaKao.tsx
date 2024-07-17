import { useEffect, useState } from 'react';
import LOGO from './assets/fonts/kakao_login_medium_wide.png';
import { UserInfo } from './themes/type';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUserStore } from './components/store/auth';

const SocialKakao = () => {
  const navigate = useNavigate();
  const REST_API_KEY = 'b17785da085d35dbc9e83392fb2015fb';
  const REDIRECT_URI = 'http://localhost:3000/scul/users/login';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const setEmail = useUserStore((state) => state.setEmail);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    window.location.href = link;
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setAccessToken(data.access_token);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      setLoading(true);
      toast.loading('사용자 정보를 받아오는 중입니다...', { duration: 1000 });

      setTimeout(() => {
        fetch('https://kapi.kakao.com/v2/user/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data: UserInfo) => {
            setUserInfo(data);
            setEmail(data.kakao_account.email);
            toast.success('사용자 정보를 성공적으로 받아왔습니다!');
            navigate('/signup');
          })
          .catch((error) => {
            console.error('Error:', error);
            toast.error('사용자 정보를 받아오는 중 오류가 발생했습니다.');
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1500); // 1초 지연
    }
  }, [accessToken, navigate]);

  return (
    <>
      {!loading && <img src={LOGO} onClick={handleLogin} alt="Kakao Login" />}
      {userInfo && (
        <div>
          <h2>{userInfo.kakao_account.email}</h2>
        </div>
      )}
    </>
  );
};

export default SocialKakao;
