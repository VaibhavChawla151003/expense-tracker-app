const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb');
const path = require('path');
//config .env file

dotenv.config();

//database call
connectDb();
//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/',(req,res) =>{
    console.log("Server is Ok");
})
//user routes
app.use('/api/v1/users',require('./routes/userRoute'));

//transaction routes
app.use('/api/v1/transactions',require('./routes/transactionRoutes'));


//port
const PORT = 8080 || process.env.PORT

//listen server

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})