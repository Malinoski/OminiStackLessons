// index (list all0), show (show one), store, update (update a session), destroy (destroy a session)

const User = require('../models/User');

module.exports = {
    /*
    // just to test
    store(req, res){
        return res.json({message: "Hello"});
    },
    */
   
    async store(req, res){
        // The code below is the same as:
        // const email = req.body.email;
        const {email} = req.body;

        // If the user exist, return it, or create one
        // P.s: 'async' and 'await' wait the function finishes
        // P.s: 'let' is variable and can change
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({email});
        }        

        return res.json(user);
    }
};