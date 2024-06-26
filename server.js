const express = require('express');
const app = express();
const sequelize = require('./config/connection');

const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
const routes = require('./controllers');
app.use(routes);

const PORT = process.env.PORT || 3001;

// turn on connection to db and server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
