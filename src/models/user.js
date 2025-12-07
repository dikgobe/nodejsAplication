const mongoose = require('../configurations/dbconfig');
const userSchema = new mongoose.Schema({
    name: string,
    email:string,
    password:string,
    role: {type: string, enum['admin', 'customer'], default:'customer'},
});
module.exports = mongoose.model('User', userSchema);