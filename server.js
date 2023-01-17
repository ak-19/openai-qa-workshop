import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { conversationRouter } from './routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/talk', conversationRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening at port ${port}`));