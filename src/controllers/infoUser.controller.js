const User = require('../models/Users.schema.js');


const infoUser= async  (req, res) => {

    try {
        const user= await User.findById()
        return res.json({user})
    } catch (error) {
        
    }

}

module.exports=infoUser;