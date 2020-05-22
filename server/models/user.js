const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const secretKey = "secret"
const saltRounds = 10;

const userSchema = mongoose.Schema({
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
  role: {
    type: Number,
    default: 0
  },
  tokenExp: {
    type: Number
  },
  image: String
});

userSchema.pre("save", function(next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
        // Store hash in your password DB.
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function(callback) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), secretKey);
  const oneHour = moment()
    .add(1, "hour")
    .valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function(err, user) {
    if (err) return callback(err);
    callback(null, user);
  });
};

userSchema.statics.findByToken = function(token, callback) {
  const user = this;

  jwt.verify(token, secretKey, function(err, decode) {
    user.findOne({ "_id": decode, token: token }, function(err, user) {
      if (err) return callback(err);
      callback(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
