import { Router } from "express";
import { container } from "tsyringe";
import { Joi, Segments, celebrate } from "celebrate";
import multer from "multer";
import { CreateUserController } from "@users/UseCases/createUser/CreateUserController";
import { ListUsersController } from "@users/UseCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/UseCases/createLogin/CreateLoginController";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import uploadConfig from "@config/upload";
import { UpdateAvatarController } from "@users/UseCases/updateAvatar/UpdateAvatarController";
import { ShowProfileController } from "@users/UseCases/showProfile/ShowProfileController";
import { UpdateProfileController } from "@users/UseCases/updateProfile/UpdateProfileController";

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);
const createLoginController = container.resolve(CreateLoginController);
const updateAvatarController = container.resolve(UpdateAvatarController);
const showProfileController = container.resolve(ShowProfileController);
const updateProfileController = container.resolve(UpdateProfileController);
const upload  = multer(uploadConfig);

usersRouter.post('/', isAuthenticated, celebrate({
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

usersRouter.get('/', isAuthenticated, celebrate({
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

usersRouter.patch('/avatar', isAuthenticated, upload.single("avatar"),
(request, response) => {
  return updateAvatarController.handle(request, response);
})

usersRouter.get('/profile', isAuthenticated,
(request, response) => {
  return showProfileController.handle(request, response);
})

usersRouter.put('/profile', isAuthenticated, celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string().optional(),
    password_confirmation: Joi.string().valid(Joi.ref('password')).when('password', {
      is: Joi.exist(),
      then: Joi.required(),
    })
  }
}), (request, response) => {
  return updateProfileController.handle(request, response);
})

export { usersRouter };
