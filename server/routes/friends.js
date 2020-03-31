const express = require("express");
const router = express.Router();
const { Friend } = require("../models/friend");

router.post("/add_friend", (req, res) => {
  const friend = new Friend(req.body);
  friend.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      friendData: doc
    });
  });
});

router.post("/request_approved", (req, res) => {
  Friend.findOneAndUpdate(
    { _id: req.body._id },
    { status: "friends" },
    (err, friend) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        friendData: friend
      });
    }
  );
});

router.post("/remove_any_friend_or_request", (req, res) => {
  Friend.remove({ _id: req.body._id }, (err, friend) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      friendData: friend
    });
  });
});

router.get("/list", function(req, res) {
  Friend.find({ }, function(err, friends) {
    if (err) return res.json({ success: false, err });
    
    res.send(friends);
    
  });
});

router.post("/find_friend_by_request", (req, res) => {
  Friend.find({ secondUserID: req.body.secondUserID }, (err, friends) => {
    if (!friends)
      return res.json({
        searchingSuccess: false,
        messsage: "Searching failed, person not found, or u need more arguments"
      });
      var friendMap = {};

      friends.forEach(function(friend) {
        friendMap[friend.secondUserID] = friend;
      });
      res.send(friendMap);
  });
});

router.get("/find_friend_by_response", (req, res) => {
  Friend.find({ firstUserID: req.body.firstUserID }, (err, friends) => {
    if (!friends)
      return res.json({
        searchingSuccess: false,
        messsage: "Searching failed, person not found, or u need more arguments"
      });
      var friendMap = {};

      friends.forEach(function(friend) {
        friendMap[friend.secondUserID] = friend;
      });
      res.send(friendMap);
  });
});


module.exports = router;
