
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port=3000



// bringing all routers

const user=require('./routers/user');
const admin=require('./routers/admin');
const org=require('./routers/org');
const superadmin=require('./routers/superadmin');
const subs=require('./routers/subs');



const DB = require('./config/db');

DB.umDB.sequelizeDB.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
    DB.umDB.sequelizeDB.sync({})
    .then(() => {
        console.log('tables creation successful');
      })
      .catch(err => {
        console.error('tables creation failed:', err);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});


// add the routes

app.use('/api/user/',user);
app.use('/api/admin/',admin);
app.use('/api/org/',org);
app.use('/api/superadmin',superadmin);
app.use('/api/subs',subs);

app.listen(port, () => {
  console.log('server running in 3000 port')
})