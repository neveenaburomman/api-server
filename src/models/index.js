'use strict';

const{Sequelize,DataTypes}=require('sequelize');// return object with two properties 
require('dotenv').config();
const clothes=require('./clothes');
const food =require('./food');
const Collection = require("./collection-class");


const POSTGRES_URL  = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3
console.log(POSTGRES_URL);
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
} : {};

const sequelize = new Sequelize(POSTGRES_URL , sequelizeOptions);

let clothesModel = clothes(sequelize, DataTypes);
let foodModel = food(sequelize, DataTypes);

let clothesCollect = new Collection(clothesModel);
let foodCollect  = new Collection(foodModel);


module.exports={
    db :sequelize, //for connection ,we will use it the index.js 
    clothesCollection: clothesCollect, // for creating the table and will use it in our routes
    foodCollection: foodCollect, // for creating the table and will use it in our routes
}