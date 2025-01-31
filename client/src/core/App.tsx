import React from 'react'
import { createRoot } from 'react-dom/client'

import './App.scss'
import IndexPage from 'src/pages/IndexPage/IndexPage'

createRoot(document.getElementById('app')!).render(
    <IndexPage />,
)
