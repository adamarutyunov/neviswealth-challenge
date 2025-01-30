import React from 'react'
import { createRoot } from "react-dom/client";

import './App.scss'
import IndexPage from '../pages/IndexPage/IndexPage';

createRoot(document.getElementById("app")!).render(
    <IndexPage />
);
