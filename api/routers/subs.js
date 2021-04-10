const express = require('express');

const db=require('../config/db');
const Subsmodel = db.umDB.subs;
const router=express.Router();


// api:http://localhost:3000/api/subs/subsadd
router.post('/subsadd',(req,res)=>{

    let reqsubs=req.body.subs;

    Subsmodel.create({
        subs:reqsubs
       
    })

    .then(()=>{
        res.send({
            message: "subscription added successfully",
            status: 200
        })
    })
    .catch((err)=>{
        res.send({
            message: "Unable to add user to the server",
            status: 500,
            err:err
        })
    })
})

module.exports=router;
