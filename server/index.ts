import express, { Request, Response } from 'express';
import cors from 'cors'
import {fileURLToPath} from 'url';

import companiesData from './data.json';
import { Company } from './types';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(cors());

const mediaPath = express.static(path.join(__dirname, 'media'))
app.use('/media', mediaPath)

const companies: Company[] = companiesData

app.get('/companies', (req: Request, res: Response) => {
    res.json(companies);
});

app.get('/companies/:id', (req: Request, res: Response) => {
    const company = companies.find(c => c.id === req.params.id);

    if (!company) {
        return res.status(404).json({ error: 'Company not found' });
    }

    res.json(company);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
