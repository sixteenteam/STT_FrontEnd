import { useMutation, useQuery } from '@tanstack/react-query';
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
      setToken(res.data.accessToken, res.data.refreshToken);
      navigate('/home');
    },
    onError: () => {
      console.error('회원가입에 실패했어요.');
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
