const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userBody = {
  name:{
      type:String,
      required:true
  },
  age:{
      type:Number,
      required:false
  },
  profile_pic:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  },
  token:{
      type:String,
      required:false
  }
};

const UserSchema = mongoose.Schema(userBody);

UserSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET || "SECRETBOY",
      {
        expiresIn: 60 * 60 * 24 * 2,
      }
    );
    user.token = token;
    await user.save();
    return token;
  };
  
  UserSchema.methods.authenticate = async (name, password) => {
    if (typeof password == "undefined" || typeof name == "undefined") {
      return false;
    }
    const user = await User.findOne({
      name,
    });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return false;
    }
    return true;
  };

const User = mongoose.model("User", UserSchema);

module.exports = User;
