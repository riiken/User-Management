const express = require('express');

const db=require('../config/db');
const Adminmodel = db.umDB.admin;
const router=express.Router();

// router.get('/',(req,res) => {
//     res.send("admin route connection established")
// })


// method:post
// desc:add signup details to database
// api:http://localhost:3000/api/admin/adminsignup

router.post('/adminsignup',(req,res)=>{

    let reqname=req.body.name;
    let reqemail=req.body.email;
    let reqpassword=req.body.password;

    Adminmodel.create({
        name:reqname,
        email:reqemail,
        password:reqpassword
    })

    .then(()=>{
        res.send({
            message: "Admin added successfully",
            status: 200
        })
    })
    .catch((err)=>{
        res.send({
            message: "Unable to add admin to the server",
            status: 500,
            err:err
        })
    })
})


// method:post
// api:http://localhost:3000/api/admin/adminsignin


router.post('/adminsignin',(req,res)=>{
    const reqemail = req.body.email;
    const reqpassword = req.body.password;
Adminmodel.findOne({where:{

            email:reqemail,
            password:reqpassword
    },raw: true})
    .then((adminsdata)=>{
       
        if(adminsdata)
        {

            res.send({
                message: "user signin successful",
                status: 200,
                email:adminsdata.email
              
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
// // api::http://localhost:3000/api/admin/

router.get('/',(req,res)=>{

    Adminmodel.findAll()
    .then((admindata)=>{

        res.send({
            data:admindata,
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
