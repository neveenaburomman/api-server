'use strict';

const food =(sequelize,DataTypes)=> sequelize.define('food',{

    typeOfFood :{
    type:DataTypes.STRING,
    allowNull:false 
    },
    priceOfFood :{
    type:DataTypes.STRING,
    }
    
    })
    
    
    module.exports=food;