const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    originalUrl:
    {
        type: String,
    },

    shortUrl: {
        type: String,
        unique: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Url', urlSchema);
