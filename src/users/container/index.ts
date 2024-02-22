import { container } from "tsyringe";
import { CreateUserController } from "@users/UseCases/createUser/CreateUserController";
import { IUsersRepository } from "@users/repositories/IUserRepository";
import { UsersRepository } from "@users/repositories/UsersRepository";
import { ListUsersController } from "@users/UseCases/listUsers/ListUsersController";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);

