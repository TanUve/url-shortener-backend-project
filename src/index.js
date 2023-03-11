
require('#Config/env.js')
const httpServer = require("#Config/http.js");
const connectDB = require('#Config/db.js')


const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;


//Creamos función de arranque:
const bootstrap = async () => {

    await connectDB(URI);
    httpServer.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

bootstrap();