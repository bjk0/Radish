const User = require('../models/user');

exports.getData = async (req, res) => {
    try {
        const docs = await User.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    } 
   };
   
   exports.getByID = async (req, res) =>  {
    try {
const docs = await User.find({username : req.params.user}, (err)=>{
    if(err) throw err;
});
  
if(docs.length == 0) throw {
    message: 'no content'
};
res.status(200).json(docs[0]);
}catch(err){
 res.status(500).send(err);
} 
}