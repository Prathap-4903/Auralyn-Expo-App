const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})