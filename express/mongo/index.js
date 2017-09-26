import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
import { User, Task } from './models';
import { UserRouter, TaskRouter } from './routes';
const app = express();
const PORT = 3000 // Can set Environment variable if desired

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', UserRouter);
app.use('/tasks', TaskRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));