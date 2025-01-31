import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Person from './Person'

describe('Person component', () => {
    const mockProps = {
        id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        name: 'Adam Arutyunov',
    }

    it('renders correctly with given name and avatar', () => {
        render(<Person {...mockProps} />)

        const avatar = screen.getByRole('img', { hidden: true })
        expect(avatar).toHaveAttribute('src', expect.stringContaining(`/media/avatars/${mockProps.id}.webp`))

        expect(screen.getByText(mockProps.name)).toBeInTheDocument()
    })
})

