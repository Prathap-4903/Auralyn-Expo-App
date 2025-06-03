const express = require('express');

const userApi = express.Router();

userApi.get('/:username', (req, res) => {
    res.send("Working Username API Route");
});