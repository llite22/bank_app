import { useMutation, useQuery } from '@tanstack/react-query'
import { UserSchema, User } from '../../../entities/User/model/types/user'
import { useContext } from 'react'
import { AuthContext } from '@/shared/lib/context/AuthContext'
import { $api } from '@/shared/api/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { useNavigate } from 'react-router-dom'
import { getRouteDashboard } from '@/shared/const/router'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const useAuth = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const { mutate, isPending, isError } = useMutation({
        mutationFn: ({ username, password }: LoginByUsernameProps) => {
            return $api.post<UserSchema>('/auth', { username, password })
        },
        onSuccess: ({ data }) => {
            if (data) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, data.token)
                setUser?.(data.data)
                navigate(getRouteDashboard())
            }

        },
        onError: (error) => {
            setUser?.(null)
            console.error(error)
        }
    })
    const { refetch } = useQuery({
        queryKey: ['auth'],
        queryFn: () => $api.get<User>('/auth_me'),
        enabled: false
    })
    return { mutate, isPending, isError, refetch }
}