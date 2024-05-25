import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'


export const useBankCard = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery({
        queryKey: ['bankCard', user?.id],
        queryFn: () => $api.get(`/banks?user_id=${user?.id}`)
    });

    return {
        query
    }
}