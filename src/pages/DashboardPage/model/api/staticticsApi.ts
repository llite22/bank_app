import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { StatisticData } from '../types/statictics'


export const useStatisctics = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery<StatisticData>({
        queryKey: ['statistics', user?.id],
        queryFn: () => $api.get(`/statistics?user_id=${user?.id}`)
    });

    return {
        query
    }
}