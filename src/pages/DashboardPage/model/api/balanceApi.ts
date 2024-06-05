import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { BalanceData } from '../types/balance'

export const useBalance = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery({
        queryKey: ['balances', user?.id],
        queryFn: () => $api.get<BalanceData[]>(`/balances?user_id=${user?.id}`)
    });

    return {
        query
    }
}