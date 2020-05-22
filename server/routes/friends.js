const express = require("express");
const router = express.Router();
const { Friend } = require("../models/friend");

router.post("/add_friend", (req, res) => {
  const friend = new Friend(req.body);
  friend.save((err, friends) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      friendData: friends
    });
  });
});

router.post("/request_approved", (req, res) => {
  Friend.findOneAndUpdate(
    { _id: req.body._id },
    { status: "Friends" },
    (err, friend) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        friendData: friend
      });
    }
  );
});

router.post("/delete", (req, res) => {
  Friend.deleteOne({ _id: req.body._id }, (err, friend) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      friendData: friend
    });
  });
});

router.get("/list", (req, res) => {
  Friend.find({ }, (err, friends) => {
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
