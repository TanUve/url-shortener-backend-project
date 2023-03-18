const urlController = {};
const Url = require('../models/Urls.schema.js');


urlController.getUrls = async (req, res) => {
    try {
        //Buscamos por uid y devolvemos todo lo que coincida con ese valor indicado
        const urls = await Url.find({ uid: req.uid });
        return res.json({ urls });
    } catch (error) {
        return res.status(500).json({ error: 'server error' })
    }
}

module.exports=urlController;