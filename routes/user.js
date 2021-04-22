const express = require('Express');
const jwt = require ('jsonwebtoken');
const config = require ('config');
const router = express.Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const UserModel = require('../models/UserModel');


// Registration User route
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
    check('email;', 'Please enter a valid Email').not().isEmail(),
    check('password', 'Please enter a password with min 6 or More characters').isLength({
        min: 6
    }),
    check('cpassword').not(),
],

    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, username, email, password, cpassword } = req.body;
        try {

            //  If user already exists;

            let user = await UserModel.findOne({ email});
            if (user) {
                return res.status(400).json({ msg: "User already exists with this email!" })
            }
            let User = await UserModel.findOne({username});
           if(User){
                return res.status(400).json({ msg: "User already exists with this Username" })
            }
            if(password !== cpassword){
               return res.status(400).json({msg: "password doesnot match"});
            }

            //  if new user then save it;

            user = new UserModel({
                name,
                username,
                email,
                password,
                cpassword
            })

            //  Password converting into hash format;

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
            user.cpassword = await bcrypt.hash(cpassword,salt);
            await user.save()
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
        catch (err) {
          console.log(errors);
        }


    });

module.exports = router;