const User = require('../models/Users.schema.js');


const infoUser= async  (req, res) => {

    try {
        //Le ponemos el método lean para que la consulta sea más rápida y nos devueva un objeto simple
        const user= await User.findById(req.uid).lean();
        return res.json({_id: user._id})
    } catch (error) {
        return res.status(500).json({error:"server error"})
    }

}

module.exports=infoUser;