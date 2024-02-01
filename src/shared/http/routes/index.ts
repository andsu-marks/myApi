import { AppError } from '@shared/errors/appError';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  throw new Error('acesso negado');
  return response.json({ message: 'Ola dev' });
});

export { routes };
