const express = require('express');

const userApi = express.Router();

userApi.get('/', (req, res) => {
    res.send("Testing API");
});