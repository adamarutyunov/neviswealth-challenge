import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Spinner from './Spinner'

describe('Spinner Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Spinner />)

        expect(container.firstChild).toHaveClass('Spinner')
    })
})
