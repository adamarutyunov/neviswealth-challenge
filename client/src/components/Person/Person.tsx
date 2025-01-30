import React from 'react'

import './Person.scss'

interface PersonProps {
    id: string;
    name: string;
}

export default function Person({ id, name }: PersonProps) {
    return (
        <div className="Person">
            <img
                className="Avatar"
                src={`http://localhost:4000/media/avatars/${id}.webp`}
                aria-hidden
            />
            {name}
        </div>
    )
}
