const router = require("express").Router();
let User = require("../Models/UsersModel");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:Username").get((req, res) => {
  User.find({"Username":req.params.Username})
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
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
  const GroupInvites= req.body.GroupInvites;
  const GroupsInfo = req.body.GroupsInfo;

  const newUser = new User({
    Username: Username,
    Password: Password,
    Name: Name,
    Gender: Gender,
    Wallet: Wallet,
    GroupID:GroupID,
    ContactNumber: ContactNumber,
    Email:Email,
    GroupManagerRequests:GroupManagerRequests,
    GroupRequests:GroupRequests,
    GroupInvites:GroupInvites,
    GroupsInfo: GroupsInfo
  });
  newUser
    .save()
    .then(() => res.json("New User Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
