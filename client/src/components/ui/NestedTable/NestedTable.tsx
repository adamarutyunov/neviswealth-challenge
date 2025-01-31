import React, { CSSProperties, ReactNode, useMemo } from 'react'

import './NestedTable.scss'

interface NestedTableProps {
    columnsLabels: string[];
    children?: ReactNode;
}

export default function NestedTable({ columnsLabels, children }: NestedTableProps) {
    const columnsCount: number = useMemo(() => columnsLabels.length, [columnsLabels])

    // Injecting columns count in order to be used
    // by all NestedTableRows
    const tableStyle = useMemo(() => {
        return {
            '--table-columns-count': columnsCount,
        } as CSSProperties
    }, [columnsCount])

    return (
        <div className="NestedTable" style={tableStyle}>
            <div className="NestedTableRow">
                <div className="NestedTableRow_content NestedTableRow_labels">
                    {/* Empty div to fill first grid cell */}
                    <div></div>

                    {columnsLabels.map(value =>
                        <span className="NestedTableRow_label" key={value}>
                            {value}
                        </span>,
                    )}
                </div>

            </div>

            {children}
        </div>
    )
}
