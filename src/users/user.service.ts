import { UserRepository } from "./user.repository";

export class UserService {
  static async getAll() {
    return await UserRepository.findAll({
      attributes: [
        "id",
        "firstname",
        "lastname",
        "email",
        "phoneNumber",
        "country",
      ],
    });
  }

  static async getOne(id: string) {
    return await UserRepository.findOne({
      attributes: [
        "id",
        "firstname",
        "lastname",
        "email",
        "phoneNumber",
        "country",
      ],
      where: {
        id,
      },
    });
  }
}
