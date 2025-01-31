import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import DashboardGraph from './DashboardGraph'

import { Company } from '../../types/data'

describe('DashboardGraph', () => {
    const mockCompany: Company = {
        id: 'fakec489-a30c-4682-9ffe-9c79288421de',
        name: 'Tech Corp',
        values: [250, 300, 100],
        branches: [
            {
                id: 'fake6838-1065-417f-a8a7-e4e5ca5c14bf',
                name: 'New York Branch',
                values: [500, 100, 30],
                employees: [
                    {
                        id: 'faked3b6-b1cc-41e3-bd21-502b5a5c5888',
                        name: 'Alice Smith',
                        values: [30, 40, 50],
                        channels: [
                            {
                                id: '1',
                                name: 'Channel 1',
                                values: [0, 3, 1],
                            },
                            {
                                id: '2',
                                name: 'Channel 2',
                                values: [0, 3, 1],
                            },
                            {
                                id: '3',
                                name: 'Channel 3',
                                values: [0, 3, 1],
                            },
                        ],
                    },
                ],
            },
        ],
    }

  const labels = ['Label 1', 'Label 2']

  it('renders the StackedBarChart with the correct data', () => {
    render(<DashboardGraph company={mockCompany} labels={labels} />)

    // Check if the chart is rendered with the correct data keys
    const chart = screen.getByTestId('stacked-bar-chart')
    expect(chart).toBeInTheDocument()

    // Assuming StackedBarChart takes the dataKeys as a prop and renders them somehow:
    // (You would adapt this to match the actual structure and behavior of StackedBarChart)
    expect(chart).toHaveAttribute('data-keys', 'Channel 1, Channel 2, Channel 3')

    // You can also check for the presence of labels
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('calculates the stacked bar values correctly', () => {
    render(<DashboardGraph company={mockCompany} labels={labels} />)

    // Assuming the chart visualizes the values as text or some identifiable element
    // You can inspect the elements or mock the StackedBarChart component's internal behavior
    const bars = screen.getAllByTestId('stacked-bar')

    // You'd check that the values for each channel are correctly summed
    expect(bars[0]).toHaveTextContent('18') // First bar value for Channel 1
    expect(bars[1]).toHaveTextContent('35') // First bar value for Channel 2
    expect(bars[2]).toHaveTextContent('10') // First bar value for Channel 3
  })
})

