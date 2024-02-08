import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import { index } from '../env/index';
import { init } from './router';
import { loadMysqlDB } from './domain/config/DataSourceConfig';
import { loadMongoDB } from './domain/config/mongoDataSourceConfig';

const env = index;

const app = express();
app.use(helmet());
app.use(express.json());
init(app);

// db connection
loadMysqlDB();
loadMongoDB();

const corsOptions = {
    origin: '*',
    credentials: true,
};
app.use(cors(corsOptions));

const port = env.port || 3000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
