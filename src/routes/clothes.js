'use strict';

// taking routing functionality from express .
const express = require('express');
const { clothesCollection } = require('../models/index');
//this router will have all of our router 
const router = express.Router();

//Routes
router.post('/clothes', addedNewcloth); //for create
router.get('/clothes', getclothes);// for read
router.get('/clothes/:id', getclothByID);
router.put('/clothes/:id', updateclothes);
router.delete('/clothes/:id', deleteclothes);



async function getclothes(req, res) {
    //findAll => return arrays of objects 
    let Clothes = await clothesCollection.readRecord();
    res.status(200).json(Clothes);
}

async function addedNewcloth(req, res) {
    let newOne = req.body;
    let cloth = await clothesCollection.createRecord(newOne);
    res.status(201).json(cloth);
}

async function updateclothes(req, res) {
    const id = parseInt(req.params.id);
    let updatedOne = req.body;
    let updatedcloth=await clothesCollection.updateRecord(updatedOne,id);
    
    res.status(201).json(updatedcloth);
}

async function deleteclothes(req, res) {
    const id = parseInt(req.params.id);
    let deletecloth = await clothesCollection.deleteRecord(id);
    res.status(204).json(deletecloth);
}

async function getclothByID(req, res) {
    const id = parseInt(req.params.id);
    const clothID = await clothesCollection.readRecord(id);
    res.status(200).json(clothID);
}



module.exports = router;