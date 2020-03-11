const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Vinicius",
    email: "vini@live.com",
    password_hash: "j32o1j3oi21joi3j21"
});

module.exports = routes;