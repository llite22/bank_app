import { User } from "@/entities/User/model/types/user";
import { createContext } from "react"

export interface UserContextProps {
    user?: User | null;
    setUser?: (user: User | null) => void;
    isLoading?: boolean;
    setIsLoading?: (isLoading: boolean) => void;

}

export const AuthContext = createContext<UserContextProps>({})