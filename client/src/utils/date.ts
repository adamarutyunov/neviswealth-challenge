export function getMonthLabel(date: Date): string {
    return date.toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
    })
}

export function createMonths(start: Date, count: number) {
    const months = Array.from({length: count},
        (_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1)
    )

    return months
}
