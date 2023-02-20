import 'dotenv/config'
export default {
   HOST: process.env.HOST,
   USER: process.env.USER,
   PASSWORD: process.env.PASSWORD,
   PORT: process.env.DB_PORT,
   DB: process.env.DB_NAME,
   dialect: 'mysql',
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
   },
};
