const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Backend Configuration
const app = express();
app.use(express.json());
app.use(cors());

//Server Configuration
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
