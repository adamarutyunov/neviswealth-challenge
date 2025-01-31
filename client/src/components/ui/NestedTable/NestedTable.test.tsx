import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NestedTable from './NestedTable';

describe('NestedTable Component', () => {
    test('renders correctly with column labels', () => {
        const columns = ['Name', 'Age', 'Location'];
        render(<NestedTable columnsLabels={columns} />);

        columns.forEach(label => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    test('renders children properly', () => {
        render(
            <NestedTable columnsLabels={['Column 1']}>
                <div data-testid="child-element">Child Content</div>
            </NestedTable>
        );

        expect(screen.getByTestId('child-element')).toBeInTheDocument();
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });
});
