'use strict';

function validator(req,res,next){
   
   if ( (req.query.name) !== "" && isNaN(req.query.name))
   {
   next()
   }
   else{
   
   next('The Name You Entered NOT valid! try again');
   console.log('The Name You Entered NOT valid! try again');
   }
   }
   
   
   
   module.exports =validator;