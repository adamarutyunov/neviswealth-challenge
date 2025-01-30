import React, {ReactNode} from "react";

import './NestedTable.scss'

interface NestedTableProps {
    columnsLabels: string[];
    children?: ReactNode;
}

export default function NestedTable({ columnsLabels, children }: NestedTableProps) {
    return (
        <div className="NestedTable">
            <div className="NestedTableRow">
                <div className="NestedTableRow_content NestedTableRow_labels">
                    {/* Empty div to fill first grid cell */}
                    <div></div>

                    {columnsLabels.map(value =>
                        <span className="NestedTableRow_label" key={value}>
                            {value}
                        </span>
                    )}
                </div>

            </div>

            {children}
        </div>
    )
}
