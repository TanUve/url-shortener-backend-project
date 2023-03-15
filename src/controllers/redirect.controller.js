const Url = require('../models/Urls.schema.js');

const redirectUrl = async (req, res) => {
    try {
        //Buscamos por el id que se pasa por params
        const { nanoUrl } = req.params;
        const shortUrl = await Url.findOne({nanoUrl});

        if (!shortUrl)
            return res.status(404).json({ error: `Url doesn't exist` });

        return res.redirect(shortUrl.originalUrl);


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        return res.status(500).json({ error: 'server error' });
    }

}


module.exports = redirectUrl;