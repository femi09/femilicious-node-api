import { UserRepository } from "./user.repository";

export class UserService {
  static async getAll() {
    return await UserRepository.findAll({
      attributes: ["firstname", "lastname", "email", "phoneNumber", "country"],
    });
  }
}
