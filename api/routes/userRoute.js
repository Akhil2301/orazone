const express =require('express')
const {create,read}=require('../controllers/userController.js')
const {enquiryValidator}=require('../validator/index')
const router=express.Router()


router.post('/create',enquiryValidator,create)
router.get('/read',read)




module.exports=router