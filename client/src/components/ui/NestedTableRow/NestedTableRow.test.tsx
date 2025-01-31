import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NestedTableRow from './NestedTableRow'

describe('NestedTableRow Component', () => {
    const mockProps = {
        id: 'row1',
        label: 'Test Label',
        values: [1337, 42],
        nestingLevel: 1,
    }

    it('renders correctly with provided label and values', () => {
        render(<NestedTableRow {...mockProps} />)

        expect(screen.getByText('Test Label')).toBeInTheDocument()
        expect(screen.getByText(1337)).toBeInTheDocument()
        expect(screen.getByText(42)).toBeInTheDocument()
    })

    it('applies correct padding based on nesting level', () => {
        render(<NestedTableRow {...mockProps} />)

        const header = screen.getByText('Test Label').closest('.NestedTableRow_header')
        expect(header).toHaveStyle('padding-left: 1.8em')
    })

    it('does not show expand icon if there are no children', () => {
        render(<NestedTableRow {...mockProps} />)

        expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('shows expand icon if children are provided', () => {
        render(
            <NestedTableRow {...mockProps}>
                <div data-testid="child-content">Child Content</div>
            </NestedTableRow>,
        )

        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})

