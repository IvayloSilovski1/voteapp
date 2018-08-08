const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');

const Vote = require('../models/vote');


const pusher = new Pusher({
  appId: '574601',
  key: 'ce26c980117fa0287a39',
  secret: '6f619db6e9295c06ec5e',
  cluster: 'eu',
  encrypted: true
});



router.get('/', (req, res) => {
  Vote.find().then(votes => res.json({
    success: true,
    votes: votes
  }))
});

router.post('/', (req, res) => {

  const newVote = {
    os: req.body.os,
    points: 1
  };

  new Vote(newVote).save().then(vote => {
    pusher.trigger('voteapp', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    });

    return res.json({
      success: true,
      message: 'Thank you for voting!'
    });
  });

});

module.exports = router;