const mongoose = require('mongoose')
const songSchema = new mongoose.Schema({
    title: { type: String, require: true },
    artist: { type: String, require: true },
    src: { type: String, require: true },
    user: { type: String, require: true },
    creayBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        require: true,
    },
    provider: { type: String }
});
const Song = mongoose.model('Song', songSchema);
module.exports = Song;