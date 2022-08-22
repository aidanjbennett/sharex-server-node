import express from 'express';
import router from './routes/index.js';
import { PORT } from './utils/constants.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
