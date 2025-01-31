import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import DashboardTable from './DashboardTable'

import { Company } from 'src/types/data'

describe('DashboardTable component', () => {
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
                                id: 'faked012-5c7d-43c4-8803-8173896908fa',
                                name: 'Existing clients',
                                values: [0, 3, 1],
                            },
                        ],
                    },
                ],
            },
        ],
    }

    const labels = ['Details', 'Statistics']

    it('renders the company name', () => {
        render(<DashboardTable company={mockCompany} labels={labels} />)

        expect(screen.getByText('Tech Corp')).toBeInTheDocument()
    })

    it('renders the branch name', () => {
        render(<DashboardTable company={mockCompany} labels={labels} />)

        expect(screen.getByText('New York Branch')).toBeInTheDocument()
    })

    it('renders the employee name', () => {
        render(<DashboardTable company={mockCompany} labels={labels} />)

        expect(screen.getByText('Alice Smith')).toBeInTheDocument()
    })

    it('renders the channel name "Existing clients"', () => {
        render(<DashboardTable company={mockCompany} labels={labels} />)

        expect(screen.getByText('Existing clients')).toBeInTheDocument()
    })
})

