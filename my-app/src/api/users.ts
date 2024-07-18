import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../components/utils';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../components/utils/Token';
import toast from 'react-hot-toast';

const router = '/users';
export interface ILoginRequest {
  email: string;
}
export interface ISignupReqeust {
  email: string;
  name: string;
  birth: string;
  profileImage?: string;
}

export interface ISignupResponse {
  accessToken: string;
  accessTokenExp: string;
}

export interface ProfileProps {
  userId: string;
  score: number;
  name: string;
  tier: string;
  profileImage: string;
}

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ISignupReqeust) =>
      instance.post<ISignupResponse>(`${router}/signup`, data),
    onSuccess: (res) => {
      toast.success('회원가입에 성공했어요.');
      setToken(res.data.accessToken);
      navigate('/quiz'); //TODO :: 네비게이트 수정 필요
      setToken(res.data.accessToken);
      navigate('/home');
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ILoginRequest) =>
      instance.post<ISignupResponse>(`${router}/login`, data),
    onSuccess: (res) => {
      toast.success('로그인에 성공했어요.');
      setToken(res.data.accessToken);
      navigate('/quiz'); //TODO :: 네비게이트 수정 필요
    },
    onError: () => {
      toast.error('로그인에 실패했어요.');
    },
  });
};

export const useProfile = () => {
  return useQuery<ProfileProps>({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await instance.get(`${router}/mypage`);
      return data;
    },
  });
};

export const useUploadImg = () => {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return instance.patch<string>(`${router}/profile`, formData);
    },
    onSuccess: () => {
      toast.success('이미지 등록 성공');
    },
    onError: () => {
      toast.error('이미지 등록에 실패했어요');
    },
  });
};
