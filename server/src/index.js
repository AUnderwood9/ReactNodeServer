import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import path from 'path';

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, "../../client")));

app.listen(3000);