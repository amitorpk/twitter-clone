const mongooose = require("mongoose");
const bycrypt = require('bcrypt');
const User = require("../models/user");
const { validationResult } = require('express-validator')

// const User = require("../models/user");

exports.signupEmail = async (req, res, next) => {

  const errors = validationResult(req);
  

  if (!errors.isEmpty())
  {
    return res.status(400).json({
      "status":res.status(400).statusCode,
      "message":"Invalid input",
      "errors": errors.array(),
    })
  }

  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
 
  const hashed_password = await bycrypt.hash(password,12);

  try{
    const user = new User({
    email: email,
    password: hashed_password,
    name: name,
    });
    const result = await user.save();
    if (result) {
      return res.status(201).json({
        message: "user created",
      });
    }
  }
  catch (err)
  {
    console.log("err",err)
    res.status(500).json({
      "status":res.status(500).statusCode,
      "message":"error occurred while creating the user",
      "errors":err,
    })
  }
};

exports.signupPhone = async(req,res,next)=>{

  const errors = validationResult(req);
  

  if (!errors.isEmpty())
  {
    return res.status(400).json({
      "status":res.status(400).statusCode,
      "message":"Invalid input",
      "errors": errors.array(),
    })
  }

  const phone_number = req.body.phone_number
  const password = req.body.password
  const name = req.body.name

  const hashed_password = await bycrypt.hash(password,12);

  try {
    const user = new User({
      phone_number: phone_number,
      password: hashed_password,
      name: name,
      });
      const result = await user.save();
      if (result) {
        return res.status(201).json({
          "status":res.status(201).statusCode,
          "message": "user created",
        });
      }

  }

  catch (err){
    res.status(500).json({
      "status":res.status(500).statusCode,
      "message":"error occurred while creating the user",
      "errors":err,
    })
  }
}

exports.signin = async(req,res,next)=>{
  console.log("login succeded");
}
