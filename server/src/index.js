import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import path from 'path';
import stateRouting from "./middleware/routing.mw";

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, "../../client")));

app.use(stateRouting);

app.listen(3000);