interface UserData {
    user_id: number;
    statistics: Statistic[];
}

interface Statistic {
    value: number;
    name: string;
    itemStyle: ItemStyle;
}

interface ItemStyle {
    borderWidth: number;
    borderColor: string;
}

export interface StatisticData {
    data: UserData[];
}
