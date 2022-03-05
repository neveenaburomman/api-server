'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const{ db } =require('../src/models/index');
let id;
//before we start the test ,connect us with database

beforeAll(async()=>{
    await db.sync();
 })
  afterAll(async()=>{
      await db.drop();
  })

describe('testing',()=>{

    it('404 on a bad route',async()=>{
        const response = await request.get('/notValid');
        expect(response.status).toEqual(404);
    })

    it('404 on a bad method', async()=>{
        const response = await request.post('/');
        expect(response.status).toEqual(404);

    })
});

//clothes testing route

describe('testing the clothes',()=>{

    it('200 if the id is in the query string', async()=>{
        const response = await request.post('/clothes').send({
            typeOfClothes:"shirt",
            priceOfClothes:"30jd"
        }); 
         expect(response.status).toBe(201);
        })

    it('test the clothes table ', async () => {
        const response = await request.get('/clothes');
        expect(response.status).toBe(200);
    });


    //it('test delete in clothes', async()=>{
     //   const response = await request.delete(`/clothes/${id}`);
       //  expect(response.status).toBe(204);
    //}) 

});

     // food  testing route
  
     it('test create in food ', async()=>{
        const response = await request.post('/food').send({
            typeOfFood:"egyption",
            priceOfFood:"30jd"
        }); 
         expect(response.status).toBe(201);
        })
     
    it('test the food table', async () => {
        const response = await request.get('/food');
        expect(response.status).toBe(200);
    });


    


    //it('test delete in food', async()=>{
    //    const response = await request.delete(`/food/${id}`);
      //   expect(response.status).toBe(204);
    //}) 

    
