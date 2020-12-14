const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil');
const ObjectId = MongoUtil.ObjectId;

router.get('/', async (req,res)=>{
    let db = MongoUtil.getDB();
    let faults = await db.collection('faults').find().toArray();
    return faults;
})

module.exports = router;