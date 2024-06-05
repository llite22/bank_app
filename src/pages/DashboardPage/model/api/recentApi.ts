import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { RecentData } from '../types/recent'

export const useRecent = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery({
        queryKey: ['recents', user?.id],
        queryFn: () => $api.get<RecentData[]>(`/recents?user_id=${user?.id}`)
    });

    return {
        query
    }
}