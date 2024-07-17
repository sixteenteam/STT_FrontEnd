import { useMutation } from '@tanstack/react-query';
import { instance } from '../components/utils';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../components/utils/Token';
import toast from 'react-hot-toast';

const router = '/users';

export interface ISignupReqeust {
  email: string;
  name: string;
  birth: string;
  profileImage?: string;
}

export interface ISignupResponse {
  accessToken: string;
  accessTokenExp: string;
  refreshToken: string;
}

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ISignupReqeust) =>
      instance.post<ISignupResponse>(`${router}/signup`, data),
    onSuccess: (res) => {
      toast.success('회원가입에 성공했어요.');
      setToken(res.data.accessToken, res.data.refreshToken);
      navigate('/home'); //TODO :: 네비게이트 수정 필요
    },
    onError: () => {
      console.error('회원가입에 실패했어요.');
    },
  });
};
