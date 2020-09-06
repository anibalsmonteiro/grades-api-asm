import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { gradeRouter } from './routes/gradeRouter.js';

dotenv.config();

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://grades-app-asm.herokuapp.com',
  })
);

app.use(gradeRouter);

app.get('/', async (req, res) => {
  res.send('API iniciada');
});

app.listen(process.env.PORT || 8081, () => {
  console.log('API iniciada');
});
