const express = require('express');
const router = express.Router();
const Song = require('../models/song')

router.post('/', async (req, res) => {
    console.log(req.body);
    let newSong = await new Song({ ...req.body }.save())
    res.send(newSong);
});
router.get('/', async (req, res) => {
    let songsList = await Song.find({});
    res.send(songsList);
});


module.exports = router;