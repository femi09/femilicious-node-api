import { Model, DataTypes } from "sequelize";
import { sequelizeInstance } from "../../startup/db";
const sequelize = sequelizeInstance();
export class Role extends Model {}
Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Role", tableName: "Roles" }
);
