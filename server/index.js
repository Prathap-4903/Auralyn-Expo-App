// Packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Backend Configuration
const app = express();

app.use(cors());

// MongoDB Configuration
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected - Auralyn");
})
.catch((err) => {
    console.log("MongoDB Error : ", err);
})

// Routes
app.get('/', (req, res) => {
    res.send('Hello From Auralyn Server..');
});

// Server Configuration
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`);
});
