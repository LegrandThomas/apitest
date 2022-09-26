import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
let db;

if (process.env.NODE_ENV !== 'test') {
    db = new Sequelize(process.env.database_prod, process.env.login_db_prod, process.env.mdp_db_prod, {
        host: "localhost",
        dialect: "mysql"
    });
   
         }else{
                 db = new Sequelize(process.env.database_test, process.env.login_db_test, process.env.mdp_db_test, {
                host: "localhost",
                dialect: "mysql"
  });
  }

  export default db;


