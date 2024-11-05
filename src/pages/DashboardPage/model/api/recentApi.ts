import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { RecentData } from '../types/recent'

export const useRecent = () => {
    const { user } = useContext(AuthContext)

    const { data, isPending, isError } = useQuery({
        queryKey: ['recents', user?.id],
        queryFn: async () => await $api.get<RecentData[]>(`/recents?user_id=${user?.id}`),
        select: (data) => data.data[0]
    });

    return { data, isPending, isError }
}