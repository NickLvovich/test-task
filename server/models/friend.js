const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({
    firstUserID: Number,
    secondUserID: Number,
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Request',
    }
});


const Friend = mongoose.model("Friend", friendSchema);

module.exports = { Friend };
