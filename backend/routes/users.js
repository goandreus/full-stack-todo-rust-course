const express = require('express');
const userQueries = require('../database/userQueries');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();


router
.route("/")
.post(async (req, res) => {
  const {username, password} = req.body;
  try {
    const newUser = await userQueries.createUser(username, password);
    newUser.token = jwt.sign(newUser, jwtSecret);
    res.json({
      data: newUser,
    })
  } catch(error) {
    res.status(400).json({error: error.message});
    }
  })

router.route('/:id')
  .get((req, res) => {
    // get one user
  })

router.route('/login')
  .post((req, res) => {
    // log in the user
  })

module.exports = router;