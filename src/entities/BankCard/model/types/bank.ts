interface Banks {
    id: number;
    user_id: number;
    balance: number;
    name: string;
    date: string;
    number_card: number;
}

export interface BanksData {
    data: Banks[];
}