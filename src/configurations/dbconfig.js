const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/jwt_bb",);

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB Successfully");
});

mongoose.connection.on('error',(err)=>{
    console.log("Error while connecting to MongoDB", err);
});

module.exports = mongoose;