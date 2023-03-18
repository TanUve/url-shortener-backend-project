const urlController = {};
const Url = require('../models/Urls.schema.js');
const { nanoid } = require('nanoid');

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

module.exports = urlController;