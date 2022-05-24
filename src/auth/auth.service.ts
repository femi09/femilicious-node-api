import { RegisterDto } from "./dto/register.dto";
import { UserRepository } from "../users/user.repository";
import { HttpException } from "./../common/exception/index";
import { Op } from "sequelize";
import { hashPassword } from "./hashPassword";
import { LoginDto } from "./dto/login.dto";
import { comparePasswords } from "./comparePassword";
import jwt, { Secret } from "jsonwebtoken";

export class AuthenticationService {
  static async register(registerData: RegisterDto) {
    const user = await UserRepository.findOne({
      where: {
        [Op.or]: [
          { email: registerData.email },
          { phoneNumber: registerData.phoneNumber },
        ],
      },
    });

    if (user.email === registerData.email) {
      throw new HttpException("email already in use", 400);
    }

    if (user.phoneNumber === registerData.phoneNumber) {
      throw new HttpException("phone number already in use", 400);
    }

    registerData.password = await hashPassword(registerData.password);

    const response = await UserRepository.create(registerData);

    if (response) {
      return response;
    }
  }

  static async login(loginData: LoginDto) {
    const user = await UserRepository.findOne({
      attributes: [
        "id",
        "email",
        "password",
        "firstname",
        "lastname",
        "phoneNumber",
      ],
      where: { email: loginData.email },
    });

    if (!user) {
      throw new HttpException("invalid email or password", 400);
    }

    const validPassword = await comparePasswords(
      loginData.password,
      user.password
    );

    if (!validPassword) {
      throw new HttpException("invalid email or password", 400);
    }

    const acccessToken = this.generateAccessToken(user.id);

    return {
      id: user.id,
      acccessToken,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: user.phoneNumber,
    };
  }

  static generateAccessToken(id: string): string {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY as Secret, {
      expiresIn: `${process.env.JWT_EXPIRES_IN}`,
    });

    return token;
  }
}
