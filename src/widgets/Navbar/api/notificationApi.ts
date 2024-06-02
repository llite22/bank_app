import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { NotificationsData } from '../model/types/notification'


export const useNotification = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery<NotificationsData>({
        queryKey: ['notification', user?.id],
        queryFn: () => $api.get(`/notifications?user_id=${user?.id}`)
    });

    return {
        query
    }
}