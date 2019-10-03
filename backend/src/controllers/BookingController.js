const Booking = require('../models/Booking')

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // Inted of return the id of user and spot,
        // the code below return the full information about each one
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};