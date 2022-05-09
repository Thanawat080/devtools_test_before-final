
const express = require("express");
const User = require('../models/user')
router = express.Router();
router.get('/login/:username', async (req, res) => {
    const { username } = req.params
    const user = await User.find({user_name : username})
    res.json(user)
  })


router.get('/loginbyid/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.find({_id : id})
    res.json(user)
  })

exports.router = router;