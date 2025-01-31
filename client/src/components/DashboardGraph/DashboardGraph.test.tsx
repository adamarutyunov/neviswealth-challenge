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

    const labels = ['Label 1', 'Label 2', 'Label 3']
    const channelsNames = ['Channel 1', 'Channel 2', 'Channel 3']

    it('renders the StackedBarChart with the correct data', () => {
        render(<DashboardGraph company={mockCompany} labels={labels} />)

        labels.concat(channelsNames).forEach(label => {
            expect(screen.getByText(label)).toBeInTheDocument()
        })
    })
})

