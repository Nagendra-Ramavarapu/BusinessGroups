const router = require("express").Router();
let Groups = require("../Models/GroupsListModel");

router.route("/").get((req, res) => {
  Groups.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/NewGroup").post((req, res) => {
  const GroupId = req.body.GroupId;
  const GroupName = req.body.GroupName;
  const GroupPassword = req.body.GroupPassword;
  const CompleteGroupChilds = req.body.CompleteGroupChilds;
  const GroupConfig = req.body.GroupConfig;
  // const GroupMembers = req.body.GroupMembers;
  // const EditAccess = req.body.EditAccess;
  // const GroupScale = req.body.GroupScale;
  // const BusinessName = req.body.BusinessName;
  // const DefaultAdmin = req.body.DefaultAdmin;
  // const Admin = req.body.Admin;
  // const GroupManager = req.body.GroupManager;
  // const TotalInvestments = req.body.TotalInvestments;
  // const Returns = req.body.Returns;
  // const InvestmentStatus = req.body.InvestmentStatus;
  // const GroupWallet = req.body.GroupWallet;
  // const GroupCreatedOn = req.body.GroupCreatedOn;
  // const TotalMembers = req.body.TotalMembers;
  // const GeneralSecurity = req.body.GeneralSecurity;
  // const MandatorySecurity = req.body.MandatorySecurity;
  // const CurrentgroupChilds = req.body.CurrentgroupChilds;
  const ChildConfig = req.body.ChildConfig;
  const ChildGroup = req.body.ChildGroup;
  const newGroup = new Groups({
    GroupId: GroupId,
    GroupName: GroupName,
    GroupPassword: GroupPassword,
    CompleteGroupChilds: CompleteGroupChilds,
    GroupConfig: GroupConfig,
    // GroupMembers: GroupMembers,
    // EditAccess: EditAccess,
    // GroupScale: GroupScale,
    // BusinessName: BusinessName,
    // DefaultAdmin: DefaultAdmin,
    // Admin: Admin,
    // GroupManager: GroupManager,
    // TotalInvestments: TotalInvestments,
    // Returns: Returns,
    // InvestmentStatus: InvestmentStatus,
    // GroupWallet: GroupWallet,
    // GroupCreatedOn: GroupCreatedOn,
    // TotalMembers: TotalMembers,
    // GeneralSecurity: GeneralSecurity,
    // MandatorySecurity: MandatorySecurity,
    // CurrentgroupChilds: CurrentgroupChilds,
    ChildConfig: ChildConfig,
    ChildGroup: ChildGroup
  });
  newGroup
    .save()
    .then(() => res.json("New Group Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Groups.findById(req.params.id)
    .then(group => {
      (group.GroupId = req.body.GroupId),
        (group.GroupName = req.body.GroupName),
        (group.GroupPassword = req.body.GroupPassword),
        (group.CompleteGroupChilds = req.body.CompleteGroupChilds),
        (group.GroupConfig = req.body.GroupConfig),
        (group.ChildConfig = req.body.ChildConfig),
        (group.ChildGroup = req.body.ChildGroup);
      group
        .save()
        .then(() => res.json("Group Updated"))
        .catch(err => res.status(400).json("Error:", err));
    })
    .catch(err => res.status(400).json("Error:", err));
});

router.route("/delete/:id").delete((req, res) => {
  Groups.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group Deleted"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
