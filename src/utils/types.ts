export type Operator = {
    symbol: string,
    action: (a: number, b:number) => number,
}