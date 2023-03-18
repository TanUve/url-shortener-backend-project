const urlController = {};
const Url = require('../../models/Urls.schema.js');

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
        //Le indicamos que cualquier error que tenga que ver con el formato del ObjectId
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        
        return res.status(500).json({ error: 'server error' });
    }

}

module.exports = urlController;