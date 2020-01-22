const mongoose = require('mongoose');
const consts = require('./consts');

const { MONGO_URL, DB_USER, DB_PASS } = consts;
const url = MONGO_URL;
const options = {
 useNewUrlParser: true, // For deprecation warnings
 useCreateIndex: true, // For deprecation warnings
 user: DB_USER,
 pass: DB_PASS,
 autoReconnect: true,
};

mongoose
 .connect(url, options)
 .then(() => console.log('connected'))
 .catch(err => console.log(`connection error: ${err}`)); // return promise, so we use *then* and *catch*