const express = require('express');
const dotenv = require('dotenv');

const app = express();
// parse application/json
app.use(express.json());


//Route files
const bootcamps = require('./routes/bootcamps');


//Mount router

app.use('/api/v1/bootcamps', bootcamps);

dotenv.config({
    path: './config/config.env'
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} on ${PORT}`))