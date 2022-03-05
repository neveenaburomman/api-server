'use strict';

const clothes =(sequelize,DataTypes)=> sequelize.define('clothes',{

    typeOfClothes :{
    type:DataTypes.STRING,
    allowNull:false 
    },
    priceOfClothes :{
    type:DataTypes.STRING,
    }
    
    })
    
    
    module.exports=clothes;