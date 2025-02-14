import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useProviderContext from './useProviderContext';

const useCards = () => {
    const {user}=useProviderContext()
    const axiosSecure=useAxiosSecure()
       const { data: cardData = [],refetch } = useQuery({
           queryKey: ['cards'],
           queryFn: async () => {
               const res = await axiosSecure.get(`/cards/${user?.email}`)
               return res.data
           }
       
       },
   )

   return [cardData,refetch]
};

export default useCards;