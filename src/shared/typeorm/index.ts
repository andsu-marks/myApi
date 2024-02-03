import { DataSource } from 'typeorm';
import { CreateRolesTable1706994245388 } from './migrations/1706994245388-CreateRolesTable';
import { Role } from '@roles/entities/Role';

export const datasource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1706994245388]
});
