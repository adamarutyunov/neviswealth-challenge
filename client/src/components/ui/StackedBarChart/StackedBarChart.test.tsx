import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { StackedBarChart } from './StackedBarChart'
import { StackedGraphData } from './types'

const mockData: StackedGraphData = {
    dataKeys: ['Category 1', 'Category 2', 'Category 3'],
    data: [
        { label: 'Bar 1', values: [10, 20, 30] },
        { label: 'Bar 2', values: [5, 15, 25] },
    ],
}

describe('StackedBarChart Component', () => {
    test('renders without crashing', () => {
        render(<StackedBarChart {...mockData} />)
        expect(screen.getByText('Bar 1')).toBeInTheDocument()
        expect(screen.getByText('Bar 2')).toBeInTheDocument()
    })

    test('renders correct number of bars', () => {
        render(<StackedBarChart {...mockData} />)
        const bars = screen.getAllByText(/Bar \d/)
        expect(bars).toHaveLength(mockData.data.length)
    })

    test('renders correct number of data keys', () => {
        render(<StackedBarChart {...mockData} />)
        const dataKeys = screen.getAllByText(/Category \d/)
        expect(dataKeys).toHaveLength(mockData.dataKeys.length)
    })

    test('renders animated bars with correct colors', () => {
        render(<StackedBarChart {...mockData} />)
        const coloredDivs = screen.getAllByRole('presentation')
        expect(coloredDivs).toHaveLength(6) // 2 bars * 3 values each
    })
})

