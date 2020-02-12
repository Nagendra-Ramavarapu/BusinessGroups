const router = require("express").Router();
let User = require("../Models/UsersModel");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:Username").get((req, res) => {
  User.find({ Username: req.params.Username })
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/Add/Fav/").post((req, res) => {
  User.updateOne(
    { _id: req.body._id },
    { $push: { FavGroupsInfo: req.body.FavGroupsInfo } }
  )
    .then(() => res.json("Fav Group Added ...!!"))
    .catch(err => res.status(400).json("Error:", err));
});

router.route("/Remove/Fav/").delete((req, res) => {
  User.findByIdAndDelete(
    { _id: req.body._id },
    { $pull: { FavGroupsInfo: req.body.FavGroupsInfo } },
    { safe: true, upsert: true }
  )
    .then(() => res.json("Fav Group Deleted ...!!"))
    .catch(err => res.status(400).json("Error:", err));
});

router.route("/SignUp").post((req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;
  const Name = req.body.Name;
  const Gender = req.body.Gender;
  const Wallet = req.body.Wallet;
  const GroupID = req.body.GroupID;
  const ContactNumber = req.body.ContactNumber;
  const Email = req.body.Email;
  const GroupManagerRequests = req.body.GroupManagerRequests;
  const GroupRequests = req.body.GroupRequests;
  const GroupInvites = req.body.GroupInvites;
  const FavGroupsInfo = req.body.FavGroupsInfo;

  const newUser = new User({
    Username: Username,
    Password: Password,
    Name: Name,
    Gender: Gender,
    Wallet: Wallet,
    GroupID: GroupID,
    ContactNumber: ContactNumber,
    Email: Email,
    GroupManagerRequests: GroupManagerRequests,
    GroupRequests: GroupRequests,
    GroupInvites: GroupInvites,
    FavGroupsInfo: FavGroupsInfo
  });
  newUser
    .save()
    .then(() => res.json("New User Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
