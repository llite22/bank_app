interface Transaction {
    day: string;
    deposit: number | string;
    withdraw: number | string;
}

export interface TransactionsData {
    user_id: number;
    transactions: Transaction[];
}