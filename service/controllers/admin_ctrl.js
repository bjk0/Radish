const Admin = require('../models/admin');

exports.getData = async (req, res) => {
    try {
        const docs = await Admin.find({});
        return res.json(docs);

    } catch (err) {
        console.log(`query error: ${err}`);
    }
};