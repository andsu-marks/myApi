import { container } from "tsyringe";
import { CreateUserController } from "@users/UseCases/createUser/CreateUserController";
import { IUsersRepository } from "@users/repositories/IUserRepository";
import { UsersRepository } from "@users/repositories/UsersRepository";
import { ListUsersController } from "@users/UseCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/UseCases/createLogin/CreateLoginController";
import { UpdateAvatarController } from "@users/UseCases/updateAvatar/UpdateAvatarController";
import { ShowProfileController } from "@users/UseCases/showProfile/ShowProfileController";
import { UpdateProfileController } from "@users/UseCases/updateProfile/UpdateProfileController";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginController', CreateLoginController);
container.registerSingleton('UpdateAvatarController', UpdateAvatarController);
container.registerSingleton('ShowProfileController', ShowProfileController);
container.registerSingleton('UpdateProfileController', UpdateProfileController)
