interface UserData {
    user_id: number;
    history: Balance[];
}

interface Balance {
    mount: string;
    balance: number;
}

export interface BalanceData {
    data: UserData[];
}
