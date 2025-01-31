export function ceilToNextRound(num: number): number {
    // Ceiling to the next “round” number based on the number's magnitude
    // 1001 → 2000
    // 345 → 400
    // 58 → 60
    // 4 → 4
    if (num < 10) return 10

    const magnitude: number = Math.pow(10, Math.floor(Math.log10(num)))
    const rounded: number = Math.ceil(num / magnitude) * magnitude

    return rounded
}

export function steps(num: number) {
    // Creating list of “steps” from 0 to the given number based on the number's magnitude
    // 500 → [100, 200, 300, 400, 500]
    // 30 → [10, 20, 30]
    // 7 → [1, 2, 3, 4, 5, 6, 7]
    const step: number = 10 ** (Math.floor(Math.log10(num)))

    const result: number[] = []

    for (let i: number = 0; i <= num; i += step) {
        result.push(i)
    }

    return result
}

