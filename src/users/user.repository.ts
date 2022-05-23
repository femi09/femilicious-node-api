import { User } from "./models/user.model";
import { RegisterDto } from "../auth/dto/register.dto";

export class UserRepository {
  static async findOne(filterQuery: any): Promise<User> {
    return await User.findOne(filterQuery);
  }

  static async findById(id: string): Promise<User | null> {
    return await User.findByPk(id);
  }

  static async findAll(filterQuery: any): Promise<User[]> {
    return await User.findAll(filterQuery);
  }

  static async create(registerData: RegisterDto): Promise<User> {
    return await User.create({ ...registerData });
  }

  static async update(user: User): Promise<User> {
    return await user.save();
  }
}
