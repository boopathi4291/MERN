const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./express-server/routes/students');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students', studentsRouter);
const port =  8080;
app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });