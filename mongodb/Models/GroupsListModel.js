const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupsSchema = new Schema(
  {
    GroupId: { type: String,   trim: true },
    GroupName: { type: String },
    GroupPassword: { type: String, minlength: 5 },
    CompleteGroupChilds: { type: Array },
    GroupConfig: { type: Object },
    EditAccess: { type: Array },
    GroupScale: { type: String },
    BusinessName: { type: String },
    DefaultAdmin: { type: String },
    Admin: { type: String },
    GroupManager: { type: String },
    TotalInvestments: { type: String },
    Returns: { type: Number },
    InvestmentStatus: { type: String },
    GroupWallet: { type: Number },
    GroupCreatedOn: { type: String },
    TotalMembers: { type: Number },
    GeneralSecurity: { type: Array },
    MandatorySecurity: { type: Array },
    CurrentgroupChilds: { type: Array },
    ChildConfig: { type: Object },
    ChildGroup: { type: Object }
  },
  {
    timestamps: true
  }
);

const Group = mongoose.model("Group", groupsSchema);
module.exports = Group;
