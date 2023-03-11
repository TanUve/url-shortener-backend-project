const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Desactivar modo estricto

const connectDB = (uri) => {
    mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log('Connected to MongoDB'))
        .catch(e => console.log('Error:', e));
}

module.exports = connectDB;