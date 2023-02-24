import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECT_STRING, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelize;
