import React, { useCallback, useMemo } from 'react'

import { StackedGraphData } from './types'
import { ceilToNextRound, steps } from '../../../utils/math'

import './StackedBarChart.scss'

const COLOR_PALETTE = ['#B29DF8', '#F4BEB4', '#A75E6E']

export function StackedBarChart({ dataKeys, data }: StackedGraphData) {
    // Calculating maximum bar value to choose correct axis scale
    const maxBarValue: number = useMemo(() => {
        // Calculating maximum of sums of each bar's values
        return Math.max(...data.map(d => d.values.reduce((a, b) => a + b, 0)))
    }, [data])

    // Ceiling max value to get nice axis steps
    const maxGraphValue: number = useMemo(() => ceilToNextRound(maxBarValue), [maxBarValue])
    // Counting axis steps
    const graphSteps: number[] = useMemo(() => steps(maxGraphValue), [maxGraphValue])

    // Function to get relative height based on value
    const getHeight = useCallback((value: number): number => {
        return value / maxGraphValue
    }, [maxGraphValue])

    return (
        <div className="StackedBarChart">
            <div className="Axis">
                {graphSteps.map(step => (
                    <div
                        key={step}
                        className="Line"
                        style={{ bottom: `${getHeight(step) * 100}%` }}
                    >
                        <div className="Line_label">{step}</div>
                    </div>
                ))}

                <div className="Bars">
                    {data.map(bar => (
                        <div
                            key={bar.label}
                            className="Bar"
                        >
                            <div className="Bar_label">{bar.label}</div>
                            <div className="Bar_values">
                                {bar.values.map((value, j) => (
                                    (value > 0) && <div
                                        className="Bar_value"
                                        style={{
                                            height: `${getHeight(value) * 100}%`,
                                            backgroundColor: COLOR_PALETTE[j],
                                        }}
                                    />),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="DataKeys">
                {dataKeys.map((key, i) => (
                    <div
                        key={key}
                        className="DataKey"
                    >
                        <div className="DataKey_color" style={{ backgroundColor: COLOR_PALETTE[i] }}></div>
                        {key}
                    </div>
                ))}
            </div>
        </div>
    )
}
