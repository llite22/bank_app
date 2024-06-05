export interface Banks {
    id: number;
    balance: number;
    name: string;
    date: string;
    number_card: number;
}

export interface BanksData {
    user_id: number,
    banks: Banks[]
}