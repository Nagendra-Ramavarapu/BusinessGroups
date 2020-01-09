const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5
    },
    Password: { type: String, required: true, minlength: 8 },
    Name: { type: String, required: true },
    Gender: { type: String },
    Wallet: { type: Number },
    GroupID:{type:Array},
    ContactNumber:{type:Number},
    GroupManagerRequests:{type:Array},
    GroupRequests:{type:Array},
    GroupInvites:{type:Array},
    GroupsInfo: { type: Array },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
