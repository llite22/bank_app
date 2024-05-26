interface Transaction {
    day: string;
    deposit: number | string;
    withdraw: number | string;
}

interface TransactionItem {
    user_id: number;
    transactions: Transaction[];
}

export interface TransactionsData {
    data: TransactionItem[];
}