const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String, // image name
    company: String, // company name
    price: Number, // price of the stpo to rent
    techs: [String], // technologies used in this spot
    user: { // user who contract the spot
        type: mongoose.Schema.Types.ObjectId, // this is the id in mongodb (ex,: {"_id": "5d95dbe45434b80af1c309f4", ...)
        ref: 'User' // just a reference
    }   
}, {
    // This is a special configuration to allow the code bellow (SpotSchema.virtual...) to be inserted 
    toJSON: {
        virtuals:true
    }
});

SpotSchema.virtual('thumbnail_url').get( function () {
        return `http://localhost:3333/files/${this.thumbnail}`
    }
)

module.exports = mongoose.model('Spot', SpotSchema);