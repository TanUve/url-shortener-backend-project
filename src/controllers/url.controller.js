const urlController = {};
const Url = require('../models/Urls.schema');


urlController.getUrls = async (req, res) => {
    try {
        const urls = await Url.find({ uid: req.uid });
        return res.json(urls);
    } catch (error) {
        return res.status(500).json({ error: 'error del servidor' })
    }
}

// urlController.createUrl = (req, res) => {

//     res.send('Creamos una nueva url')
// }

// urlController.editUrl = (req, res) => {


// }

// urlController.deleteUrl = (req, res) => {


// }


module.exports = urlController;