interface Recent {
    title: string;
    date: string;
    transaction: string;
    type: string
}


export interface RecentData {
    user_id: number;
    recent_transactions: Recent[];
}
