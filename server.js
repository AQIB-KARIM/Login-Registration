const express= require('express');
const connectDB = require('./config/db');
const app = express();


connectDB();
app.use(express.json({ extended:false  }));


// All Routes

app.get('/',(req,res) => res.send("Welcome to React App"));

app.use('/users',require('./routes/user'));

app.use('/auth',require('./routes/auth'));





const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log ("Server is Running") );

