interface UserData {
    user_id: number;
    recent_transactions: Recent[];
}

interface Recent {
    title: string;
    date: string;
    transaction: string;
    type: string
}


export interface RecentData {
    data: UserData[];
}
