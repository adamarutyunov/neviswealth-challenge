export interface StackedBar {
    label: string;
    values: number[];
}

export interface StackedGraphData {
    dataKeys: string[];
    data: StackedBar[];
}
