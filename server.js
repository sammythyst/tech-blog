const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 8080;

const hbs = exphbs.create({helpers});

const sess = {
    secret: '0oogh',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // stay logged in for 24 hours
    }
}