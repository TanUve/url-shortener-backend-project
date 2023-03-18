const urlController = {};
const { nanoid } = require('nanoid');
const Urls = require('../../models/Urls.schema');

urlController.createUrl = async (req, res) => {
    try {
        
        const { originalUrl } = await req.body;
        const newUrl = new Urls({
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