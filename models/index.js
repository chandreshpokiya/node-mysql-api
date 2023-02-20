import dbConfig from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import productModel from './productModel.js'
import reviewModel from './reviewModel.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
   host: dbConfig.HOST,
   dialect: dbConfig.dialect,
   port: dbConfig.PORT,

   pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      idle: dbConfig.pool.idle,
   },
});

sequelize
   .authenticate()
   .then(() => {
      console.log("connected successfully");
   })
   .catch((err) => {
      console.log(err);
   });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = productModel(sequelize, DataTypes);
db.reviews = reviewModel(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
   console.log("yes re-sync done !");
});

export default db
