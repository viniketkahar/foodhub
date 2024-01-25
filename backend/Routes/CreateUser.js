const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtsecret = process.env.SECRET
 
router.post("/createuser", [
    body('email',"incorrect form").isEmail(),
    body('name').isLength('5'),
    body('password').isLength({ min: 5 }),
    body('phoneNumber').isLength({min:10,max:10})  
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errorsArr: errors.array()}); 
    }

    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try {   
        await User.create({ 
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            phoneNumber: req.body.phoneNumber,
            location: req.body.location,
        })

        res.json({ success: true })
    }

    catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})    

router.post("/loginuser", [
    body('email',"incorrect form").isEmail(),
    body('password').isLength({ min: 5 }), 

],  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(),errors: "Incorrect email/password format"  });
    }

    let email = req.body.email;
  
    try {   
        let userData = await User.findOne({email}) 
        if(!userData){
            return res.status(400).json({ errors: "Incorrect Email" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)

        if(!pwdCompare){
          
            return res.status(400).json({ errors: "Incorrect Password" }); 
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtsecret);
 
        return res.json({success:true,authToken:authToken})
    }

    catch (error) {
        console.log(error)
        res.json({ success: false }) 
    }
})

module.exports = router;