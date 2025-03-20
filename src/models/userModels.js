const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: Buffer,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    inventory: {
        type: Array,
        required: false
    }
},
{timestamps: true}
)

module.exports = mongoose.model("userSchema", userSchema)