import React, {useMemo} from 'react'

import {Company} from '../../types/data';
import {StackedBarChart} from '../ui/StackedBarChart/StackedBarChart';

import {createMonths, getMonthLabel} from '../../utils/date';

const START_DATE = new Date('2024-02-01')
const MONTHS = createMonths(START_DATE, 12)
const LABELS = MONTHS.map(getMonthLabel)

interface DashboardGraphProps {
	company: Company;
}

export default function DashboardGraph({ company }: DashboardGraphProps) {
    const channels = useMemo(() => {
        return (
            company.branches
            ?.flatMap(b => b?.employees ?? [])
            ?.flatMap(e => e?.channels ?? [])
            ?? []
        )
    }, [company])

    const dataKeys = useMemo(() => {
        return Array.from(new Set(channels.map(c => c.name)))
    }, [channels])

    const data = useMemo(() => {
        const output = []

        for (let i = 0; i < LABELS.length; i++) {
            output.push({ label: LABELS[i], values: Array(dataKeys.length).fill(0) })
        }

        for (let channel of channels) {
            let keyIndex = dataKeys.indexOf(channel.name)

            for (let i = 0; i < channel.values.length; i++) {
                output[i].values[keyIndex] += channel.values[i]
            }
        }

        return output
    }, [dataKeys])

    return (
        <StackedBarChart dataKeys={dataKeys} data={data} />
    )
}
