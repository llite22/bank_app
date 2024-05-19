export interface User {
    id: string
    username: string
    avatar?: string
}

export interface UserSchema {
    data: {
        token: string
        data: User
    }
}