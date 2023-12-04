const express = require("express");
const { body } = require('express-validator')

const User = require('../models/user')
const router = express.Router();

const authControllers = require("../controllers/auth");
const authValidators = require("../validators/auth")
// const { route } = require("./home");

router.post("/signup/email", 
  [
    body('email' , 'Invalid E-mail address')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom((value , {req})=>{
      return User.findOne({email : value}).then((user)=>{
        if (user)
        {
          throw new Error('E-Mail address already exists')
        }
        return true
      })
    }),

    body('name',"length is not enough")
    .trim()
    .notEmpty()
    .isLength({min:5}),

    body('password', 'Invalid password')
    .custom(authValidators.passwordValidation)
  ] 

,authControllers.signupEmail);

router.post("/signup/phone",
  [
    body('phone_number', 'Invalid phone number')
    .trim()
    .notEmpty()
    .matches(/^\d+$/)
    .custom(authValidators.signupPhoneNumberValidator),

    body('password', 'Invalid password')
    .custom(authValidators.passwordValidation),

    body('name',"length is not enough")
    .trim()
    .notEmpty()
    .isLength({min:5}),

  ],
  authControllers.signupPhone)

router.post(
  '/login',
  [
    body('email' , 'Invalid E-mail address')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom(authValidators.signInEmailValidator),

    body('password')
  ],
  authControllers.signin
)
module.exports = router;
