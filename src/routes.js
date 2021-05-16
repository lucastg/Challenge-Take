const express = require('express');
const ObterRepositorios = require('./ObterRepositorios');

const routers = express.Router();

routers.get('/ObterRepositorios', ObterRepositorios.ObterRepositorios);

module.exports = routers;