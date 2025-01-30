export function ceilToNextRound(num: number): number {
    if (num < 10) return 10;

    const magnitude = Math.pow(10, Math.floor(Math.log10(num)));
    const rounded = Math.ceil(num / magnitude) * magnitude;

    return rounded;
}

export function steps(num: number) {
    const step = 10 ** (Math.floor(Math.log10(num)));

    let result = [];

    for (let i = 0; i <= num; i += step) {
        result.push(i);
    }

    return result;
}

