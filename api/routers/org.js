const express = require('express');

const db=require('../config/db');
const Orgmodel = db.umDB.org;
const router=express.Router();

// router.get('/',(req,res) => {
//     res.send("admin route connection established")
// })


// method:post
// desc:add signup details to database
// api:http://localhost:3000/api/org/orgsignup

router.post('/orgsignup',(req,res)=>{

    let reqname=req.body.name;
    let reqemail=req.body.email;
    let reqpassword=req.body.password;
    let reqsubscription=req.body.subscription;

    Orgmodel.create({
        name:reqname,
        email:reqemail,
        password:reqpassword,
        subscription:reqsubscription
    })

    .then(()=>{
        res.send({
            message: "user added successfully",
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


// method:post
// api:http://localhost:3000/api/org/orgsignin


router.post('/orgsignin',(req,res)=>{
    const reqemail = req.body.email;
    const reqpassword = req.body.password;
Orgmodel.findOne({where:{

            email:reqemail,
            password:reqpassword
    },raw: true})
    .then((orgdata)=>{
       
        if(orgdata)
        {

            res.send({
                message: "user signin successful",
                status: 200,
                email:orgdata.email
              
            })
        }
        else{
            res.send({
                message: "Invalid email-id or password!",
                status: 404
            })
        }
    })
    .catch((err)=>{
        res.send({
            message: "Invalid email-id",
            status: 500,
            err:err
        })
    })
})


// method:get
// desc: this will show admins
// // api::http://localhost:3000/api/org/

router.get('/',(req,res)=>{

    Orgmodel.findAll()
    .then((orgdata)=>{

        res.send({
            data:orgdata,
            status:200
        })
    })
    .catch((err)=>{
        res.send({
            data:{message:"some error while sending"},
            err:err,
            status:500
        })
    })
})



module.exports=router;
