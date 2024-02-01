import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Ola dev' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
