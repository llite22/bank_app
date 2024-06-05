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
    user_id: number;
    statistics: Statistic[];
}
