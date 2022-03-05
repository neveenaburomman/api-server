'use strict';
 //CRUD OPERATIONS

class Collection {
   
    constructor(model) {
        this.model = model;

    }
    async createRecord(obj) {
        try {
            return await this.model.create(obj);
        } catch (error) {
            console.log('error in creating new record for model: ', this.model.name);
        }
    }
    async readRecord(id){
        try{
          if(id){
            return await this.model.findOne({where: {id:id}});
          }
          else{
            return await this.model.findAll();
          }
         } catch(error){
           console.error('error in reading record(s) for model: ', this.model.name);
         }
        }
     async updateRecord(body, id){
            try{
             
              return await  this.model.update(body,{where: {id:id}});
             } catch(error){
               console.error('error in updating record for model: ', this.model.name);
             }
            }
     async deleteRecord(id){
                try{
                  return await this.model.destroy({where: {id:id}});

                 } catch(error){
                   console.error('error in deleting record for model: ', this.model.name);
                 }
                }       



}


  module.exports = Collection;



