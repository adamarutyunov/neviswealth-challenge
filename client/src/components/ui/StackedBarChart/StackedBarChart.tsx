import React, {useCallback, useMemo} from 'react'

import {ceilToNextRound, steps} from '../../../utils/math';

import './StackedBarChart.scss';

const COLOR_PALETTE = ['#B29DF8', '#F4BEB4', '#A75E6E']

interface StackedBar {
    label: string;
    values: number[];
}

export interface GraphData {
    dataKeys: string[];
    data: StackedBar[];
}

export function StackedBarChart({ dataKeys, data }: GraphData) {
    const maxBarValue = useMemo(() => {
        return Math.max(...data.map(d => d.values.reduce((a, b) => a + b, 0)));
    }, [data]);

    const maxGraphValue = useMemo(() => ceilToNextRound(maxBarValue), [maxBarValue]);
    const graphSteps = useMemo(() => steps(maxGraphValue), [maxGraphValue]);

    const getHeight = useCallback((value: number) => {
        return value / maxGraphValue;
    }, [maxGraphValue]);

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
                    {data.map((bar) => (
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
                                    />)
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
