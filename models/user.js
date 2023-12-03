const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   default: mongoose.Types.ObjectId,
  // },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
  },

  email: {
    type: String,
  },

  phone_number: {
    type: String,
  },
});

// module.exports = mongoose.Model("User", userSchema);
module.exports = mongoose.model("User", userSchema);
