import React, { useMemo } from 'react'

import { StackedBarChart } from '../ui/StackedBarChart/StackedBarChart'
import { StackedBar } from '../ui/StackedBarChart/types'

import { Channel, Company } from '../../types/data'

interface DashboardGraphProps {
    company: Company;
    labels: string[]
}

export default function DashboardGraph({ company, labels }: DashboardGraphProps) {
    // Dashboard is constructed only from channels,
    // so we have to extract all of them from the company
    const channels: Channel[] = useMemo(() => {
        return (
            company.branches
                ?.flatMap(b => b?.employees ?? [])
                ?.flatMap(e => e?.channels ?? [])
            ?? []
        )
    }, [company])

    const channelsNames: string[] = useMemo(() => {
        return Array.from(new Set(channels.map(c => c.name)))
    }, [channels])

    const data: StackedBar[] = useMemo(() => {
        const output = []

        // Creating bars with zero values
        for (const label of labels) {
            output.push({ label, values: Array(channelsNames.length).fill(0) })
        }

        // Adding actual values to corresponding bars
        for (const channel of channels) {
            const keyIndex = channelsNames.indexOf(channel.name)

            for (let i = 0; i < channel.values.length; i++) {
                output[i].values[keyIndex] += channel.values[i]
            }
        }

        return output
    }, [channelsNames])

    return (
        <StackedBarChart dataKeys={channelsNames} data={data} />
    )
}
