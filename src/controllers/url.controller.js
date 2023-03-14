const urlController = {};
const Url = require('../models/Urls.schema.js');
const { nanoid } = require('nanoid');


urlController.getUrls = async (req, res) => {
    try {
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
            nanoUrl: `https://shorty/${nanoid(5)}`,
            uid: req.uid
        })
        const urlDB = await newUrl.save();
        return res.status(201).json({ urlDB })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'server error' })
    }
}
// urlController.editUrl = (req, res) => {


// }

// urlController.deleteUrl = (req, res) => {


// }


module.exports = urlController;