const router = require("express").Router();
let Transactions = require("../Models/TransactionsModel");

router.route("/").get((req, res) => {
    Transactions.find()
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/NewTransaction").post((req, res) => {
  const TransactionId = req.body.TransactionId;
  const GroupID = req.body.GroupID;
  const UserId = req.body.UserId;
  const Purpouse = req.body.Purpouse;
  const TransactionAmount = req.body.TransactionAmount;
  const AccessType = req.body.AccessType;
  const WalletAmountBefore = req.body.WalletAmountBefore;
  const WalletAmountAfter = req.body.WalletAmountAfter;
  const Status = req.body.Status;
  const Returns = req.body.Returns;
  const newTransaction = new Transactions({
    TransactionId: TransactionId,
    GroupID: GroupID,
    UserId: UserId,
    Purpouse: Purpouse,
    TransactionAmount: TransactionAmount,
    AccessType: AccessType,
    WalletAmountBefore: WalletAmountBefore,
    WalletAmountAfter:WalletAmountAfter,
    Status:Status,
    Returns:Returns
  });
  newTransaction
    .save()
    .then(() => res.json("New Transaction Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
