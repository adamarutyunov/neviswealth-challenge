import React, { useCallback, useEffect, useMemo, useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { StackedGraphData } from './types'
import { ceilToNextRound, steps } from 'src/utils/math'

import './StackedBarChart.scss'

const COLOR_PALETTE = ['#B29DF8', '#F4BEB4', '#A75E6E']

export function StackedBarChart({ dataKeys, data }: StackedGraphData) {
    const [transitionStarted, setTransitionStarted] = useState<boolean>(false)

    useEffect(() => {
        setTransitionStarted(true)
    }, [])

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
                                    (value > 0) &&
                                    <AnimateHeight
                                        duration={300}
                                        height={transitionStarted ? `${getHeight(value) * 100}%` : 0}
                                        easing='ease-out'
                                        animateOpacity
                                        className="Bar_value"
                                        contentClassName="Bar_value_content"
                                    >
                                        <div
                                            role="presentation"
                                            style={{
                                                height: '100%',
                                                backgroundColor: COLOR_PALETTE[j],
                                            }}
                                        ></div>
                                    </AnimateHeight>
                                ))}
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
