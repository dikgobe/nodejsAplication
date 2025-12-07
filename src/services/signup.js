const user = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(Userdata) {
    const { name, email, password, role } = Userdata;

    const bcryptedPassword = await bcrypt.hash(password, 10);

    const createdUser = new user({
        name,
        email,
        password: bcryptedPassword,
        role: "customer"
    });
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser };