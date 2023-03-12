const router= require('express').Router();

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user //Este user se crea en la validación
        }
    })
})

module.exports = router