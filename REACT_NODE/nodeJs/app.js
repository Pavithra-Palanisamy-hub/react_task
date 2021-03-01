const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const { addUser, getList, deleteUser, deleteAllUser, changeUserName, getUserList } = require('./helpers/user');
const { PORT, MONGO_CONNECTION_STRING } = require('./constants');

const app = express();

// ========cors ===============
app.use(cors())

// ============Body parser===========
app.use(bodyParser.json());

mongoose.connect(MONGO_CONNECTION_STRING);

//route functions
const listen = () => {
  console.log(`Listening at http://localhost:${PORT}`)
}

app.post('/user/add', addUser);

app.get('/user/add', getList)

app.delete('/:userName', deleteUser)

app.delete('/user/deleteAllUser', deleteAllUser)

app.get('/userlist', getUserList)

app.listen(PORT, listen);