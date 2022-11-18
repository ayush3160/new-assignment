const Rating = require("../schema/Rating.js")


const createRating = async(req,res) => {
    try {

        const data = req.body;

        data.time = new Date()

        const newRating = new Rating(data)

        const result = await newRating.save()

        res.send({id : result._id})

    } catch (error) {
        console.log(error)
    }
}

const getRatingById = async(req,res) => {
    try {
        const newRating = await Rating.find({_id : req.body.id})

        console.log(newRating)

        res.send(newRating)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createRating,
    getRatingById
}