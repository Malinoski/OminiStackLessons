const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {

    async index(req, res){
        const { tech } = req.query; // here we use 'query' (ex.: http://localhost:3333/spots?tech=ReactJS)

        // Find in mongodb        
        const spots = await Spot.find({ techs: tech});

        return res.json(spots);
    },

    async store(req, res){
        console.log(req.body);
        console.log(req.file);

        const { filename } = req.file;
        const { company, techs, price} = req.body;
        const { user_id } = req.headers; // app contexts, like authentications, idioms, etc..

        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({error: 'User does not exists =/'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,

            // Create an array: techs.split(',')
            // Remove blank spaces: .map(tech => tech.trim() 
            techs: techs.split(',').map(tech => tech.trim()), 
            price
        })

        // Initial response, just to check is working
        // return res.json({ok:true})

        return res.json(spot)
    }
}