import { instance } from '@/components/utils';
import { useQuery } from '@tanstack/react-query';

const router = '/users';

export interface ProfileProps {
  id: number;
  name: string;
  email: string;
}

export const useProfile = () => {
  return useQuery<ProfileProps>({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await instance.get(`${router}/mypage`);
      return data;
    },
  });
};
