import { Request, Response } from 'express';
import { ListRolesUseCase } from './ListRolesUseCase';

export class ListRolesController {
  constructor(private ListRolesUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.ListRolesUseCase.execute();
    return response.json(roles);
  }
}
