import { RegisterDto } from "./dto/register.dto";
import { UserRepository } from "../users/user.repository";
import { HttpException } from "./../common/exception/index";
import { Op } from "sequelize";
import { hashPassword } from "./hashPassword";

export class AuthenticationService {
  static async register(registerData: RegisterDto) {
    const userByEmail = await UserRepository.findOne({
      where: {
        email: registerData.email,
      },
    });

    if (userByEmail) {
      throw new HttpException("email already in use", 400);
    }

    const userByPhoneNumber = await UserRepository.findOne({
      where: {
        phoneNumber: registerData.phoneNumber,
      },
    });

    if (userByPhoneNumber) {
      throw new HttpException("phonenumber already in use", 400);
    }

    registerData.password = await hashPassword(registerData.password);

    const response = await UserRepository.create(registerData);

    if (response) {
      return response;
    }
  }

  static async login() {}
}
