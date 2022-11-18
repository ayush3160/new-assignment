const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating : {
        type : Number,
        required : true,
    },
    comment : {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required : true
    }
})

const Rating = new mongoose.model('Rating',ratingSchema);

module.exports = Rating;