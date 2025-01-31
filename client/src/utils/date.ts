export function getMonthLabel(date: Date): string {
    // Jan 2024
    return date.toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
    })
}

export function createMonths(start: Date, count: number) {
    // Create an array of {count} consecutive months starting from {start}
    const months = Array.from({ length: count },
        (_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1),
    )

    return months
}
