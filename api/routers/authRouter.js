const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../helpers/users-model');
const secret = process.env.JWT_SECRET || 'JuStDoIt';
const router = express.Router();

// Register Endpoint
router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    const newUser = await Users.add(user);
    if (newUser !== undefined) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ message: 'Error adding user' });
    }
});

// Login Endpoint
router.post('/login', async (req, res) => {
    const credentials = req.body;
    try {
        const user = await Users.findByUsername(credentials.username);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.username}`,
                user: {
                    ...user,
                    token,
                },
            });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret, options);
}
module.exports = router;
