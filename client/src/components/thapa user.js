// const express = require('Express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const { validationResult } = require('express-validator');
// const UserModel = require('../models/UserModel');


// // Registration User
// router.post('/register', async (req, res) => {
//     const { name, username, email, password, c_password } = req.body;

//     if (!name || !username || !email || !password || !c_password) {
//         return res.status(422).json({ error: "Please filled the fields properly" });
//     }
  
//     try {
//         const userExist = await UserModel.findOne({ email:email });

//         if (userExist) {
//             return res.status(422).json({ msg: "User already exists with this email" });
//         }
//         const user = new UserModel({ name, username, email, password, c_password });
//         await user.save();


//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();
//         res.send("User saved Successfully");
//     }
//     catch (errors) {
//         console.log(errors);
//     }



// });

// module.exports = router;