import React from 'react'
import { createRoot } from 'react-dom/client'

import './App.scss'
import IndexPage from 'src/pages/IndexPage/IndexPage'

const dotenv = require('dotenv')
dotenv.config()

createRoot(document.getElementById('app')!).render(
    <IndexPage />,
)
