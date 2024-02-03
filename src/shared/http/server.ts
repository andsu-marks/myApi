import 'dotenv/config';
import 'reflect-metadata';
import { app } from './app';
import { datasource } from '@shared/typeorm';

const PORT = process.env.PORT;

datasource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});
