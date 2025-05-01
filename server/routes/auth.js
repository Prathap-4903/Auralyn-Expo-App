const express = require('express');

const authApi = express.Router();

authApi.get('/sign-in', (req, res) => {
  res.send("Testing Sign In Route");
});

authApi.get('/sign-up', (req, res) => {
  res.send("Testing Sign Up Route");
});

module.exports = authApi;