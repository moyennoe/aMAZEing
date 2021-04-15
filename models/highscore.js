const mongoose = require('mongoose')

const HighscoreSchema = new mongoose.Schema({
    username: { type: String },
    score: { type: Number }
})

module.exports = mongoose.model('Highscore', HighscoreSchema )