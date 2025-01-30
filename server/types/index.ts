export type Metric = {
    id: string;
    name: string;
    values: number[];
}

export type Channel = Metric

export type Employee = Metric & {
    channels?: Channel[]
}

export type Branch = Metric & {
    employees?: Employee[]
}

export type Company = Metric & {
    branches?: Branch[]
}
