const express = require('express');
const signupRoute = require('./routes/signup');
const bodyParser = require('body-parser');
const app = express();
const Port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use('/user', signupRoute);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
})