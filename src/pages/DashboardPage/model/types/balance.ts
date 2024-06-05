export interface Balance {
    mount: string;
    balance: number;
}

export interface BalanceData {
    user_id: number;
    history: Balance[];
}
