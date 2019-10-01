// index (list all0), show (show one), store, update (update a session), destroy (destroy a session)

module.exports = {
    store(req, res){
        return res.json({message: "Hello"});
    }
};