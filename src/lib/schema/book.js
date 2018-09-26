const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

let schema = mongoose.Schema({
    name: String,
    author: String,
    roomId: ObjectId,

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    createdBy: ObjectId,
    updatedBy: ObjectId
});

module.exports = mongoose.model('book', schema);