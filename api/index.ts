import express from 'express';
import cors from 'cors';
import cardRouter from './src/routes/cards';
import loginRouter from './src/routes/login';
import error from './src/middlewares/error';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.use('/cards', cardRouter);
app.use('/login', loginRouter);
app.use(error);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
