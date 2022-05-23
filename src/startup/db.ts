import mysql from "mysql";
import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: "mysql",
  pool: dbConfig.pool,
});

export const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to Database has been established successfully.");
    await sequelize.sync()
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const sequelizeInstance = () => sequelize;
