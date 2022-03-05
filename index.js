'use strict';

require('dotenv').config(); //to automatically loads enviroment variables from a .env object 

const server= require('./src/server');
// we should write db inside curly brackets to specifies which one i want to export
 
const {db}=require('./src/models/index');

//connect the database

db.sync().then(() =>{

server.start(process.env.PORT|| 3001);
})

.catch(console.error);
