import helmet from 'helmet'
import express from 'express'
import bodyParser from 'body-parser'
import Debug from "debug";
const debug = Debug("SERVER:dev");
import cookieParser from 'cookie-parser'


import { errors } from 'celebrate'

import indexRoute from './routes/index.js'

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());


app.use(errors());



app.use('/', indexRoute);


app.listen(3000, () => {
  debug(`Servidor rodando na porta: ${3000}`);


});
