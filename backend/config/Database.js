import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
let db;

if (process.env.NODE_ENV !== 'test') {
    db = new Sequelize(process.env.database_prod, process.env.login_db_prod, process.env.mdp_db_prod, {
        host: "localhost",
        dialect: "mysql",
        logging : false
        
    });
 
         }else{
                 db = new Sequelize(process.env.database_test, process.env.login_db_test, process.env.mdp_db_test, {
                host: "localhost",
                dialect: "mysql",
                logging : false
  });
//   const deleteTable = async () => {
//     try {
//         await db.query('DROP TABLE IF EXISTS users');  // sends queries
//         return true;
//     } 
//     catch (error) {
//         console.error(error.stack);
//         return false;
//     } 
//     finally {
//         console.log('La table users à bien était effacée et recréé avec succés');
//               return                   // closes connection
//     }
// };

// deleteTable().then((result) => {
//     if (result) {
//         console.log('Table deleted');
//     }
// });

   }

export default db;


