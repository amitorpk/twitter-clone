const User = require('../models/user')

exports.signupPhoneNumberValidator = (value) => {
  if (value.length != 10)
  {
    throw new Error('Phone number must be 10 digits long')
  }
}

exports.passwordValidation = (value)=>{
    
    if (value.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
    
      // Require at least one uppercase letter
      if (!/[A-Z]/.test(value)) {
        throw new Error('Password must contain at least one uppercase letter');
      }
    
      // Require at least one lowercase letter
      if (!/[a-z]/.test(value)) {
        throw new Error('Password must contain at least one lowercase letter');
      }
    
      // Require at least one digit
      if (!/\d/.test(value)) {
        throw new Error('Password must contain at least one digit');
      }
    
      // Require at least one special character
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        throw new Error('Password must contain at least one special character');
      }
    
      return true;
    };

exports.signInEmailValidator = (value)=>{
  return User.findOne({email : value}).then((user)=>{
    if (!user)
    {
      throw new Error('user with given E-Mail address is not found')
    }
    return true;
  })
}


