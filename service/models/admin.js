const mongoose = require('mongoose');
const admin = {
    id : {type: Number, index: 1 },
    name : String,
    email : String,
    password : String,
    Permissions : Number
};

const adminSchema = new mongoose.Schema(admin);
const Admin = mongoose.model('Product', adminSchema);

module.exports = Admin;