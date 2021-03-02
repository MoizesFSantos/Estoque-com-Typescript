import express from 'express';
import routes from './routes';
import cors from 'cors';
require('./database');

const app = express();

app.use(routes);
app.use(cors());


app.listen(3000);