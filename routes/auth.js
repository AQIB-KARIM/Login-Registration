const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const UserModel = require('../models/UserModel');


router.get('/', (req, res) => {
    res.send('Get Logged in user')
});

router.post('/', [
    check('username', 'Please enter valid username').exists(),
    check('password', 'Please enter your password').exists()
],


    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {username , password} = req.body;
        try {
            let user = await UserModel.findOne({username});
            if(!user){
                return res.status(400).json({msg: 'Username doesnot exist!'})
            }
            const checkpassword = await bcrypt.compare(password,user.password);
            if(!checkpassword){
             return res.status(400).json({msg: 'Invalid password'})
            }
     
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(payload ,config.get('SecretKey'),{
                expiresIn: 360000
            },(err,token) =>{
               if(err)throw  err;
               res.json({token});
            })

        } 
        catch (error) {
            console.log(error.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;