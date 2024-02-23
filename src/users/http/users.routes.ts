import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "@users/UseCases/createUser/CreateUserController";
import { Joi, Segments, celebrate } from "celebrate";
import { ListUsersController } from "@users/UseCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/UseCases/createLogin/CreateLoginController";

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);
const createLoginController = container.resolve(CreateLoginController);

usersRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
    roleId: Joi.string().uuid().required()
  }
}), (request, response) => {
  return createUserController.handle(request, response);
})

usersRouter.get('/', celebrate({
  [Segments.QUERY]: {
    page: Joi.number(),
    limit: Joi.number()
  }
}), (request, response) => {
  return listUserController.handle(request, response);
})

usersRouter.post('/login', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}), (request, response) => {
  return createLoginController.handle(request, response);
})

export { usersRouter };
