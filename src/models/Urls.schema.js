const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    originalUrl:
    {
        type: String,
        min:6,
        required: true,
        trim: true
    },

    nanoUrl: {
        type: String,
        unique: true
    },
    //Cada vez que creemos una URL hay que indicar quién fue quien creó la URL y para indicar esto,
    //tenemos que hacer referencia al id que crea mongoDB del schema del usuario
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Url', urlSchema);
