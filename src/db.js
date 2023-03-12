const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Desactivar modo estricto

const connectionMongoUri = process.env.MONGO_URI;
mongoose.connect(connectionMongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(e => console.log('Error:', e));


