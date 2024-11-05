import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { StatisticData } from '../types/statictics'

export const useStatisctics = () => {
    const { user } = useContext(AuthContext)

    const { data, isPending, isError } = useQuery({
        queryKey: ['statistics', user?.id],
        queryFn: async () => await $api.get<StatisticData[]>(`/statistics?user_id=${user?.id}`),
        select: (data) => data.data[0]
    });

    return { data, isPending, isError }
}