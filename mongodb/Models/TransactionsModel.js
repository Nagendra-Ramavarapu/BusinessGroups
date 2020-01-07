const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionsSchema = new Schema(
  {
            TransactionId:{type:String,unique:true},
            GroupID:{type:String},
            UserId:{type:String},
            Purpouse: {type:String},
            TransactionAmount: {type:Number},
            AccessType: {type:String},
            WalletAmountBefore:{type:Number},
            WalletAmountAfter:{type:Number},
            Status:{type:String},
            Returns: {type:Number}
  },
  {
    timestamps: true
  }
);

const Transactions = mongoose.model("Transactions", TransactionsSchema);
module.exports = Transactions;
