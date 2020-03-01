const mongoose = require("mongoose");

const friendsSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

const Friends = mongoose.model("Friends", userSchema);

module.exports = { Friends };
