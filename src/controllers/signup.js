const userService = require('../services/signup');

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({ message: 'User registered successfully', user: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

module.exports = { createUser };