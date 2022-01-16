const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        const hashePassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            username: req.body.username,
            password: hashePassword
        })
        const saveUser = await user.save()
        console.log('New user saved successfully');
        res.json(saveUser)

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "internal server error" })
    }

    router.post("/login", async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) { return res.status(400).json({ message: "Invalid credentials" }) }
            const match = await bcrypt.compare(rea.body.password, user.password)
            if (match) {
                const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
                res.json({ accessToken })
            } else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "internal server error" })
        }
    })




});
router.get('/', async (req, res) => {
    let users = await User.find({});
    res.send(users);
});


module.exports = router;