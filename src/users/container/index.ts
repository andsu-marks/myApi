import { container } from "tsyringe";
import { CreateUserController } from "@users/UseCases/createUser/CreateUserController";
import { IUsersRepository } from "@users/repositories/IUserRepository";
import { UsersRepository } from "@users/repositories/UsersRepository";
import { ListUsersController } from "@users/UseCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/UseCases/createLogin/CreateLoginController";
import { UpdateAvatarController } from "@users/UseCases/updateAvatar/UpdateAvatarController";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginController', CreateLoginController);
container.registerSingleton('UpdateAvatarController', UpdateAvatarController);
