export interface Notifications {
    id: number;
    bank_name: string;
    account_number: number;
    transaction_type: string;
    amount: number;
    currency: string;
    transaction_date: string;
    message: string;
}


export interface NotificationsData {
    user_id: number;
    count: number;
    notification: Notifications[];
}