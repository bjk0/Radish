const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
const options = {
 useNewUrlParser: true, // For deprecation warnings
 useCreateIndex: true, // For deprecation warnings
 useUnifiedTopology: true
};

mongoose
 .connect(url, options)
 .then(() => console.log('connected'))
 .catch(err => console.log(`connection error: ${err}`)); // return promise, so we use *then* and *catch*