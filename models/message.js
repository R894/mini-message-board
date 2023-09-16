const mongoose = require("mongoose");

const Schema = mongoose.Schema;

MessageSchema = new Schema({
    user: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);