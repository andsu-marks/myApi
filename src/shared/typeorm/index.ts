import { DataSource } from 'typeorm';
import { Role } from '@roles/entities/Role';
import { CreateRolesTable1708525259112 } from './migrations/1708525259112-CreateRolesTable';
import { CreateUsersTable1708525420889 } from './migrations/1708525420889-CreateUsersTable';
import { AddRoleIdToUsersTable1708525954444 } from './migrations/1708525954444-AddRoleIdToUsersTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1708525259112, CreateUsersTable1708525420889, AddRoleIdToUsersTable1708525954444]
});
