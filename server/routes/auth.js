const express = require('express');

const authApi = express.Router();

authApi.get('/', (req, res) => {
  res.send("Testing API..");
});