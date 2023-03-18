const urlController = {};
const Url = require('../models/Urls.schema.js');



urlController.deleteUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const url = await Url.findById(id);
        if (!url)
            return res.status(404).json({ error: `Url doesn't exist` });

        if (!url.uid.equals(req.uid))
            return res.status(401).json({ error: `That url belongs to another user and you aren't allowed to consult it` })

        await url.remove();

        return res.status(200).json({ message: `Url delete`, url });


    } catch (error) {
        console.log(error)
        //Le indicamos que cualquier eror que tenga que ver con el formato del ObjectId
        //
        if (error.kind === "ObjectId") return res.status(404).json({ error: `Url doesn't exist` });
        return res.status(500).json({ error: 'server error' });
    }


}

module.exports =urlController;