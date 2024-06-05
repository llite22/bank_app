import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { TransactionsData } from '../types/transaction'

export const useTransaction = () => {
    const { user } = useContext(AuthContext)

    const query = useQuery({
        queryKey: ['transactions', user?.id],
        queryFn: () => $api.get<TransactionsData[]>(`/transactions?user_id=${user?.id}`)
    });

    return {
        query
    }
}