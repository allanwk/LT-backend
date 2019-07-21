const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
        unique: true,
        trim: false,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    size: {
        type: String,
        required: false,
        unique: false,
        trim: false,
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: false,
    },
    price:{
        type: String,
        required:true,
        unique: false,
        trim: false
    },
    url1:{ type: String },
    url2:{ type: String },
    url3:{ type: String },
    url4:{ type: String },
    url5:{ type: String },
}, {
    timestamps: false,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
