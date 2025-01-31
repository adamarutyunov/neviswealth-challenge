import React, { CSSProperties, ReactNode, useMemo, useRef, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { clsx }  from 'clsx'

import ArrowIcon from 'src/assets/icons/arrow.svg'

interface NestedTableRowProps {
    children?: ReactNode;

    id: string;
    label: ReactNode
    values: any[];

    nestingLevel?: number;
}

export default function NestedTableRow({ children, id, label, values, nestingLevel = 0 }: NestedTableRowProps) {
    const [expanded, setExpanded] = useState<boolean>(false)
    const expandable = children !== undefined
    const scrollAnchor = useRef<HTMLDivElement>(null)

    const headerStyle: CSSProperties = useMemo(() => {
        return {
            paddingLeft: nestingLevel * 1.8 + 'em',
        }
    }, [nestingLevel])

    return (
        <>
            <div
                className={
                    clsx('NestedTableRow', {
                        _expanded: expanded, _expandable: expandable,
                    })
                }
                key={id}
            >
                <div
                    className="NestedTableRow_content"
                    onClick={() => expandable && setExpanded(!expanded)}
                >
                    <div
                        className="NestedTableRow_header"
                        style={headerStyle}
                    >
                        <div className="NestedTableRow_control">
                            {expandable && <img src={ArrowIcon} />}
                        </div>

                        <div className="NestedTableRow_label">{label}</div>
                    </div>

                    {values.map((value, index) =>
                        <div
                            className="NestedTableRow_value"
                            key={`row_${id}_${index}`}
                        >
                            {value.toString()}
                        </div>,
                    )}
                </div>
            </div>

            <AnimateHeight
                duration={300}
                height={expanded ? 'auto' : 0}
                easing='ease-out'
                animateOpacity
                onHeightAnimationStart={() => {
                    const el = scrollAnchor.current
                    if (!el) return;

                    setTimeout(() => {
                        window.scrollTo({
                            top: Math.max(window.scrollY, el.getBoundingClientRect().bottom + window.scrollY - window.innerHeight),
                            behavior: 'smooth',
                        })
                    }, 300)
                }}
            >
                {children}
            </AnimateHeight>

            <div className="NestedTableRow_scroll-anchor" ref={scrollAnchor}></div>
        </>
    )
}
