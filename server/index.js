const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Backend Configuration
const app = express();

//MongoDB Configuration
mongoose.connect("mongodb://localhost:27017")
.then(() => {
    console.log("MongoDB Connected - Auralyn")
})
.catch((error) => {
    console.log("MongoDB Error : ", error)
})

//Routes
app.get('/', (req, res) => {
    res.send('Hola From Auralyn Server...');
});

//Running Server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
})
