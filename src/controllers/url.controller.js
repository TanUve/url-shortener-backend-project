const urlController = {};
const Url = require('../models/Urls.schema.js');
const { nanoid } = require('nanoid');


urlController.getUrls = async (req, res) => {
    try {
        //Buscamos por uid y devolvemos todo lo que coincida con ese valor indicado
        const urls = await Url.find({ uid: req.uid });
        return res.json({ urls });
    } catch (error) {
        return res.status(500).json({ error: 'server error' })
    }
}

urlController.createUrl = async (req, res) => {
    try {
        const { originalUrl } = await req.body;
        const newUrl = new Url({
            originalUrl: originalUrl,
            nanoUrl: nanoid(5),
            uid: req.uid
        })
        const urlDB = await newUrl.save();
        return res.status(201).json({ urlDB })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'server error' })
    }
}

urlController.getOneUrl = async (req, res) => {
    try {
        //Buscamos por el id que se pasa por params
        const { id } = req.params;
        const url = await Url.findById(id);

        if (!url)
            return res.status(404).json({ error: `Url doesn't exist` });
        //En caso de que el uid no coincida con el que tiene ya guardado
        //el id de la url devolvemos lo siguiente
        if (!url.uid.equals(req.uid))
            return res.status(401).json({ error: `That url belongs to another user and you aren't allowed to consult it` })

        return res.status(200).json(url);


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        return res.status(500).json({ error: 'server error' });
    }

}
urlController.getOneUrlNon = async (req, res) => {
    try {
        //Buscamos por el id que se pasa por params
        const { nanoUrl } = req.params;
        const shortUrl = await Url.findOne({nanoUrl});

        if (!shortUrl)
            return res.status(404).json({ error: `Url doesn't exist` });

        return res.status(200).json({originalUrl:shortUrl.originalUrl});


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        return res.status(500).json({ error: 'server error' });
    }

}

urlController.deleteUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const url = await Url.findById(id);
        if (!url)
            return res.status(404).json({ error: `Url doesn't exist` });

        if (!url.uid.equals(req.uid))
            return res.status(401).json({ error: `That url belongs to another user and you aren't allowed to consult it` })

        await url.remove();

        return res.status(200).json({ message: `Url deleted`, url });


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        return res.status(500).json({ error: 'server error' });
    }


}
urlController.updateUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const { originalUrl } = req.body;
        console.log(originalUrl);

        const url = await Url.findById(id);
        if (!url)
            return res.status(404).json({ error: `Url doesn't exist` });

        if (!url.uid.equals(req.uid))
            return res.status(401).json({ error: `That url belongs to another user and you aren't allowed to consult it` })

        //Le indicamos que sustituya el valor de url.originalUrl
        //por el nuevo valor de originalUrl y después se guarda.
        url.originalUrl = originalUrl;
        await url.save({ originalUrl });

        return res.status(200).json({ url });


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Invalid Url type` });
        return res.status(500).json({ error: 'server error' });
    }

}


module.exports = urlController;