'use strict';

// taking routing functionality from express .
const express = require('express');
const{foodCollection}=require('../models/index');
//this router will have all of our router 
const router =express.Router();

//Routes
router.post('/food', addedNewFood); //for create
router.get('/food', getfood);// for read
router.get('/food/:id', getfoodByID);//get by the ID
router.put('/food/:id', updatefood);//for update
router.delete('/food/:id', deletefood);//for delete



async function getfood(req, res) {
    //findAll => return arrays of objects 
    const Food = await foodCollection.readRecord();
    res.status(200).json(Food);
}

async function addedNewFood(req, res) {
    let newOne = req.body;
    const Food = await foodCollection.createRecord(newOne);
    res.status(201).json(Food);
}

async function updatefood(req, res) {
    const id = parseInt(req.params.id);
    let updatedOne = req.body;
    let updatedfood=await foodCollection.updateRecord(updatedOne,id);
    res.status(201).json(updatedfood);
}

async function deletefood(req, res) {
    const id = parseInt(req.params.id);
    const deletefood = await foodCollection.deleteRecord(id);
    res.status(204).json(deletefood);
}

async function getfoodByID(req, res) {
    const id = parseInt(req.params.id);
    const foodID = await foodCollection.readRecord(id);
    res.status(200).json(foodID);

}





module.exports = router;