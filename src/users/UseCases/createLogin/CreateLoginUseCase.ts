import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@users/repositories/IUserRepository";
import { User } from "@users/entities/User";
import { AppError } from "@shared/errors/appError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import jwtConfig  from "@config/auth"

type CreateLoginDTO = {
  email: string
  password: string
}

type IResponse = {
  user: User
  token: string
}

@injectable()
export class CreateLoginUseCase {
constructor(
  @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute({email, password}: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn
    })

    return {
      user,
      token
    }
  }
}
