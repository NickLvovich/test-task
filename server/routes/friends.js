const express = require("express");
const router = express.Router()

router.post("/new-friend", (req, res) => {
    const friend = new Friend(req.body);
    friend.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        friendData: doc
      });
    });
  });


router.post("/request_routerly", (req, res) => {
    Friend.findOneAndUpdate(
      { _id: req.body._id },
      { status: "routerroved" },
      (err, friend) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
          success: true,
          friendData: friend
        });
      }
    );
  });

  router.post("/remove_any_friend_or_request", (req, res) => {
    Friend.remove({ _id: req.body._id }, (err, friend) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        friendData: friend
      });
    });
  });
  
  