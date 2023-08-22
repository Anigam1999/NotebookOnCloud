const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Abhisheknigam'
const router = express.Router();

// create user : no login req.
router.post("/createuser",[
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid mail").isEmail(),
    body("password", "Invalid Password").isLength({ min: 5 }),
  ],async (req, res) => {
    // if validation error, return
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry, User already exist" });
      }
      // else, create user
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
    
      res.json({authtoken});

    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error!");
    }
  }
);

// Authenticate : no login req.
router.post("/login",[
  body("email", "Enter a valid mail").isEmail(),
  body("password", "Password cannot be blank").exists(),
],async (req, res) => {
  // if validation error, return
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body
  try {
    let user = await User.findOne({email})
    if(!user){
      return res.status(400).josn({error: "Wrong credentials"})  
    }
    
    const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare){
      return res.status(400).json({error: "Wrong credentials"})  
    }
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
  
    res.json({authtoken});

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error!");
  }
  
})

// get user details : login req.
router.post('/getuser', fetchuser, async (req, res)=>{
  
  try {
    userId = req.user.id; 
    const user = await User.findById(userId).select('-password')
    res.send(user)
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error!");
  }

})

module.exports = router;
