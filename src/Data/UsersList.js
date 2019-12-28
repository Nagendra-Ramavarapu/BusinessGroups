const usersListJson = {
  Users: [
    {
      UserName: "NagendraProj",
      PassWord: "Nagendra@Proj1",
      Name: "Nagendra",
      Gender: "Male",
      Wallet: 20000,
      GroupId: ["G1", "I1", "Y1", "LG1","EY1"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    },
    {
      UserName: "SaiKiranProj",
      PassWord: "SaiKiran@Proj1",
      Name: "Nagendra",
      Gender: "Male",
      Wallet: 5000,
      GroupId: ["G1", "I1", "Y3", "LG4","EY5"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    },
    {
      UserName: "AkhilProj",
      PassWord: "Akhil@Proj1",
      Name: "AKhil",
      Gender: "Male",
      Wallet: 1500,
      GroupId: ["G2", "I5","Y2","LG2","EY4"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    },
    {
      UserName: "VedaProj",
      PassWord: "Veda@Proj1",
      Name: "Vedakanth",
      Gender: "Male",
      Wallet: 1500,
      GroupId: ["G3", "I2","Y4","LG3","EY5"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    },
    {
      UserName: "chandanProj",
      PassWord: "chandan@Proj1",
      Name: "chandan",
      Gender: "Male",
      Wallet: 1500,
      GroupId: ["G4","I2","Y5","LG4","EY2"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    },
    {
      UserName: "MadhuProj",
      PassWord: "Madhu@Proj1",
      Name: "Madhu",
      Gender: "Male",
      Wallet: 1500,
      GroupId: ["G5", "I2","Y4","LG5","EY3"],
      GroupDetails: {
        _comment: " // Incorporate Group Details"
      }
    }
  ]
};
const UsersList = JSON.stringify(usersListJson);
export default UsersList;
