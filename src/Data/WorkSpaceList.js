const WorkSpaceListJson = {
  WorkSpace: {
    Groups: [
      {
        GroupId: "G1",
        GroupName: "Business Share Company",
        GroupPassword: "G1@FirstGroup",
        CompleteGroupChilds: ["G1", "G2", "G3", "G4"],
        GroupConfig: {
          GroupMembers: [
            {
              NagendraProj: 600
            },
            {
              SaiKiranProj: 500
            }
          ],
          EditAccess: ["NagendraProj", "SaiKiranProj"],
          GroupScale: "High",
          BusinessName: "IT",
          DefaultAdmin: "NagendraProj",
          Admin: "@PersonCreatedGroup",
          GroupManager: "NagendraProj",
          TotalInvestments: 0,
          Returns: 0,
          InvestmentStatus: "Profit",
          GroupWallet: 0,
          GroupCreatedOn: "@DateConversions",
          TotalMembers: 6,
          GeneralSecurity: [],
          MandatorySecurity: [],
          CurrentgroupChilds: []
        },
        ChildConfig: {
          hasChildGroup: "Yes",
          childGroupsCount: 2,
          childGroups: ["IT", "Other"]
        },
        ChildGroup: [
          {
            GroupId: "G2",
            GroupName: "IT",
            GroupPassword: "G1@FirstChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Low",
              BusinessName: "IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 6,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "No",
              childGroupsCount: 0,
              childGroups: []
            },
            ChildGroup: {}
          },
          {
            GroupId: "G3",
            GroupName: "Other",
            GroupPassword: "G1@SecondChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Medium",
              BusinessName: "Non-IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 0,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "Yes",
              childGroupsCount: 2,
              childGroups: []
            },
            ChildGroup: [
              {
                GroupId: "G4",
                GroupName: "Construction",
                GroupPassword: "G1@FirstChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Construction",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 6,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              },
              {
                GroupId: "G5",
                GroupName: "IT",
                GroupPassword: "G4@SecondChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Hotels",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 0,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              }
            ]
          }
        ]
      },
      {
        GroupId: "I1",
        GroupName: "IT WorkSpace Company ",
        GroupPassword: "I1@FirstGroup",
        CompleteGroupChilds: ["I1", "I2", "I3", "I4"],
        GroupConfig: {
          GroupMembers: [
            {
              NagendraProj: 600
            },
            {
              SaiKiranProj: 500
            }
          ],
          EditAccess: ["NagendraProj", "SaiKiranProj"],
          GroupScale: "High",
          BusinessName: "IT",
          DefaultAdmin: "NagendraProj",
          Admin: "@PersonCreatedGroup",
          GroupManager: "NagendraProj",
          TotalInvestments: 0,
          Returns: 0,
          InvestmentStatus: "Profit",
          GroupWallet: 0,
          GroupCreatedOn: "@DateConversions",
          TotalMembers: 6,
          GeneralSecurity: [],
          MandatorySecurity: [],
          CurrentgroupChilds: []
        },
        ChildConfig: {
          hasChildGroup: "Yes",
          childGroupsCount: 2,
          childGroups: ["IT", "Other"]
        },
        ChildGroup: [
          {
            GroupId: "I2",
            GroupName: "IT",
            GroupPassword: "I1@FirstChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Low",
              BusinessName: "IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 6,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "No",
              childGroupsCount: 0,
              childGroups: []
            },
            ChildGroup: {}
          },
          {
            GroupId: "I3",
            GroupName: "Other",
            GroupPassword: "I1@SecondChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Medium",
              BusinessName: "Non-IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 0,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "Yes",
              childGroupsCount: 2,
              childGroups: []
            },
            ChildGroup: [
              {
                GroupId: "I4",
                GroupName: "Construction",
                GroupPassword: "I1@FirstChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Construction",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 6,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              },
              {
                GroupId: "I5",
                GroupName: "IT",
                GroupPassword: "I4@SecondChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Hotels",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 0,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              }
            ]
          }
        ]
      },
      {
        GroupId: "Y1",
        GroupName: "Yorkshire Cricket Academy ",
        GroupPassword: "I1@FirstGroup",
        CompleteGroupChilds: ["I1", "I2", "I3", "I4"],
        GroupConfig: {
          GroupMembers: [
            {
              NagendraProj: 600
            },
            {
              SaiKiranProj: 500
            }
          ],
          EditAccess: ["NagendraProj", "SaiKiranProj"],
          GroupScale: "High",
          BusinessName: "IT",
          DefaultAdmin: "NagendraProj",
          Admin: "@PersonCreatedGroup",
          GroupManager: "NagendraProj",
          TotalInvestments: 0,
          Returns: 0,
          InvestmentStatus: "Profit",
          GroupWallet: 0,
          GroupCreatedOn: "@DateConversions",
          TotalMembers: 6,
          GeneralSecurity: [],
          MandatorySecurity: [],
          CurrentgroupChilds: []
        },
        ChildConfig: {
          hasChildGroup: "Yes",
          childGroupsCount: 2,
          childGroups: ["IT", "Other"]
        },
        ChildGroup: [
          {
            GroupId: "Y2",
            GroupName: "IT",
            GroupPassword: "I1@FirstChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Low",
              BusinessName: "IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 6,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "No",
              childGroupsCount: 0,
              childGroups: []
            },
            ChildGroup: {}
          },
          {
            GroupId: "Y3",
            GroupName: "Other",
            GroupPassword: "I1@SecondChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Medium",
              BusinessName: "Non-IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 0,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "Yes",
              childGroupsCount: 2,
              childGroups: []
            },
            ChildGroup: [
              {
                GroupId: "Y4",
                GroupName: "Construction",
                GroupPassword: "I1@FirstChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Construction",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 6,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              },
              {
                GroupId: "Y5",
                GroupName: "IT",
                GroupPassword: "I4@SecondChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Hotels",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 0,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              }
            ]
          }
        ]
      },
      {
        GroupId: "LG1",
        GroupName: "London Gold Company",
        GroupPassword: "I1@FirstGroup",
        CompleteGroupChilds: ["I1", "I2", "I3", "I4"],
        GroupConfig: {
          GroupMembers: [
            {
              NagendraProj: 600
            },
            {
              SaiKiranProj: 500
            }
          ],
          EditAccess: ["NagendraProj", "SaiKiranProj"],
          GroupScale: "High",
          BusinessName: "IT",
          DefaultAdmin: "NagendraProj",
          Admin: "@PersonCreatedGroup",
          GroupManager: "NagendraProj",
          TotalInvestments: 0,
          Returns: 0,
          InvestmentStatus: "Profit",
          GroupWallet: 0,
          GroupCreatedOn: "@DateConversions",
          TotalMembers: 6,
          GeneralSecurity: [],
          MandatorySecurity: [],
          CurrentgroupChilds: []
        },
        ChildConfig: {
          hasChildGroup: "Yes",
          childGroupsCount: 2,
          childGroups: ["IT", "Other"]
        },
        ChildGroup: [
          {
            GroupId: "LG2",
            GroupName: "IT",
            GroupPassword: "I1@FirstChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Low",
              BusinessName: "IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 6,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "No",
              childGroupsCount: 0,
              childGroups: []
            },
            ChildGroup: {}
          },
          {
            GroupId: "LG3",
            GroupName: "Other",
            GroupPassword: "I1@SecondChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Medium",
              BusinessName: "Non-IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 0,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "Yes",
              childGroupsCount: 2,
              childGroups: []
            },
            ChildGroup: [
              {
                GroupId: "LG4",
                GroupName: "Construction",
                GroupPassword: "I1@FirstChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Construction",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 6,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              },
              {
                GroupId: "LG5",
                GroupName: "IT",
                GroupPassword: "I4@SecondChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Hotels",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 0,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              }
            ]
          }
        ]
      },
      {
        GroupId: "EY1",
        GroupName: "Ernst and Young Company",
        GroupPassword: "I1@FirstGroup",
        CompleteGroupChilds: ["I1", "I2", "I3", "I4"],
        GroupConfig: {
          GroupMembers: [
            {
              NagendraProj: 600
            },
            {
              SaiKiranProj: 500
            }
          ],
          EditAccess: ["NagendraProj", "SaiKiranProj"],
          GroupScale: "High",
          BusinessName: "IT",
          DefaultAdmin: "NagendraProj",
          Admin: "@PersonCreatedGroup",
          GroupManager: "NagendraProj",
          TotalInvestments: 0,
          Returns: 0,
          InvestmentStatus: "Profit",
          GroupWallet: 0,
          GroupCreatedOn: "@DateConversions",
          TotalMembers: 6,
          GeneralSecurity: [],
          MandatorySecurity: [],
          CurrentgroupChilds: []
        },
        ChildConfig: {
          hasChildGroup: "Yes/No",
          childGroupsCount: 2,
          childGroups: ["IT", "Other"]
        },
        ChildGroup: [
          {
            GroupId: "EY2",
            GroupName: "IT",
            GroupPassword: "I1@FirstChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Low",
              BusinessName: "IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 6,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "No",
              childGroupsCount: 0,
              childGroups: []
            },
            ChildGroup: {}
          },
          {
            GroupId: "EY3",
            GroupName: "Other",
            GroupPassword: "I1@SecondChildGroup",
            GroupConfig: {
              GroupMembers: [],
              EditAccess: ["NagendraProj"],
              GroupScale: "Medium",
              BusinessName: "Non-IT",
              DefaultAdmin: "NagendraProj",
              Admin: "@PersonCreatedGroup",
              GroupManager: "NagendraProj",
              TotalInvestments: 0,
              Returns: 0,
              InvestmentStatus: "Profit",
              GroupWallet: 0,
              GroupCreatedOn: "@DateConversions",
              TotalMembers: 0,
              GeneralSecurity: [],
              MandatorySecurity: [],
              CurrentgroupChilds: []
            },
            ChildConfig: {
              hasChildGroup: "Yes",
              childGroupsCount: 2,
              childGroups: []
            },
            ChildGroup: [
              {
                GroupId: "EY4",
                GroupName: "Construction",
                GroupPassword: "I1@FirstChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Construction",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 6,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              },
              {
                GroupId: "EY5",
                GroupName: "IT",
                GroupPassword: "I4@SecondChildGroup",
                GroupConfig: {
                  GroupMembers: [],
                  EditAccess: ["NagendraProj"],
                  GroupScale: "Low",
                  BusinessName: "Hotels",
                  DefaultAdmin: "NagendraProj",
                  Admin: "@PersonCreatedGroup",
                  GroupManager: "NagendraProj",
                  TotalInvestments: 0,
                  Returns: 0,
                  InvestmentStatus: "Profit",
                  GroupWallet: 0,
                  GroupCreatedOn: "@DateConversions",
                  TotalMembers: 0,
                  GeneralSecurity: [],
                  MandatorySecurity: [],
                  CurrentgroupChilds: []
                },
                ChildConfig: {
                  hasChildGroup: "No",
                  childGroupsCount: 0,
                  childGroups: []
                },
                ChildGroup: {}
              }
            ]
          }
        ]
      }
    ],
    NewsFeed: {
      G1: [
        {
          PostId: "G1FPId1",
          Message:
            "Economic depression cannot be cured by legislative action or executive pronouncement. Economic wounds must be healed by the action of the cells of the economic body - the producers and consumers themselves.",
          PostedOn: "Dec 18,2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G1FPId2",
          Message:
            "This life, which had been the tomb of his virtue and of his honour, is but a walking shadow; a poor player, that struts and frets his hour upon the stage, and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G1FPId3",
          Message:
            "Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything.  I myself have been guilty of over-thinking problems. Just build things and find out if they work.” — Ben Silbermann",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G1FPId4",
          Message:
            "Be undeniably good. No marketing effort or social media buzzword can be a substitute for that",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      G2: [
        {
          PostId: "G2FPId1",
          Message:
            "What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.” — Dave Thomas, Founder of Wendy’s",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G2FPId2",
          Message:
            "Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything.  I myself have been guilty of over-thinking problems. Just build things and find out if they work.” — Ben Silbermann",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G2FPId3",
          Message:
            "Economic depression cannot be cured by legislative action or executive pronouncement. Economic wounds must be healed by the action of the cells of the economic body - the producers and consumers themselves.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G2FPId4",
          Message:
            "If people like you, they’ll listen to you, but if they trust you, they’ll do business with you.” — Zig Ziglar, author, salesman,",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      G3: [
        {
          PostId: "G3FPId1",
          Message:
            "The stars will never align, and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.” — Tim Ferriss, author of The 4-Hour W",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G3FPId2",
          Message:
            "Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything.  I myself have been guilty of over-thinking problems. Just build things and find out if they work.” — Ben Silbermann",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G3FPId3",
          Message:
            "“If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.” — Mark Zuckerberg, founder of Facebook",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G3FPId4",
          Message:
            "The stars will never align, and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.” — Tim Ferriss, author of The 4-Hour W",
          GroupId: "",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      G4: [
        {
          PostId: "G4FPId1",
          Message:
            "If you define yourself by how you differ from the competition, you’re probably in trouble.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G4FPId2",
          Message:
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G4FPId3",
          Message:
            "Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "G4FPId4",
          Message:
            "This life, which had been the tomb of his virtue and of his honour, is but a walking shadow; a poor player, that struts and frets his hour upon the stage, and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      I1: [
        {
          PostId: "I1FPId1",
          Message:
            "The fastest way to change yourself is to hang out with people who are already the way you want to be.” — Reid Hoffman, LinkedIn co-founder",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I1FPId2",
          Message:
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I1FPId3",
          Message:
            "Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I1FPId4",
          Message:
            "The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow.” — Ingvar Kamprad, founder of IKEA ",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      I2: [
        {
          PostId: "I2FPId1",
          Message:
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I2FPId2",
          Message:
            "Money is like gasoline during a road trip. You don’t want to run out of gas on your trip, but you’re not doing a tour of gas stations.” — Tim O’Reilly, founder, and CEO of O’Reilly Media",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I2FPId3",
          Message:
            "The stars will never align, and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.” — Tim Ferriss, author of The 4-Hour W",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I2FPId4",
          Message:
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      I3: [
        {
          PostId: "I3FPId1",
          Message:
            "This life, which had been the tomb of his virtue and of his honour, is but a walking shadow; a poor player, that struts and frets his hour upon the stage, and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I3FPId2",
          Message:
            "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I3FPId3",
          Message:
            "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I3FPId4",
          Message:
            "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ],
      I4: [
        {
          PostId: "I4FPId1",
          Message:
            "xLife is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.yz",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I4FPId2",
          Message:
            "Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I4FPId3",
          Message:
            "I hope we shall crush in its birth the aristocracy of our monied corporations which dare already to challenge our government to a trial by strength, and bid defiance to the laws of our country.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        },
        {
          PostId: "I4FPId4",
          Message:
            "Economic depression cannot be cured by legislative action or executive pronouncement. Economic wounds must be healed by the action of the cells of the economic body - the producers and consumers themselves.",
          PostedOn: "Dec 18.2019",
          PostedBy: "Nagendra",
          likes: 3,
          Comments: [
            { commentedBY: "xyz", comment: "Nice", commentedOn: "Dec 19.2019" },
            {
              commentedBY: "abc",
              comment: "VeryBad",
              commentedOn: "Dec 19.2019"
            }
          ]
        }
      ]
    },
    Transactions: {
      G1: {
        CurrentDay: {
          "TransactionDate1(DateConvertedString)": {
            TransactionId: "Random1233",
            Purpouse: "xyz",
            TransactionAmount: 0,
            AccessType: "General",
            WalletAmountBefore: 0,
            WalletAmountAfter: 0,
            Status: "Completed",
            Returns: 0
          },
          "TransactionDate2(DateConvertedString)": {
            TransactionId: "Random1233",
            Purpouse: "abc",
            TransactionAmount: 0,
            AccessType: "General",
            WalletAmountBefore: 0,
            WalletAmountAfter: 0,
            Status: "Fail",
            Returns: 0
          }
        },
        Week: {
          "TransactionDate1(DateConvertedString)": {
            TransactionId: "Random1233",
            Purpouse: "xyz",
            TransactionAmount: 0,
            AccessType: "General",
            WalletAmountBefore: 0,
            WalletAmountAfter: 0,
            Status: "Completed",
            Returns: 0
          },
          "TransactionDate2(DateConvertedString)": {
            TransactionId: "Random1233",
            Purpouse: "abc",
            TransactionAmount: 0,
            AccessType: "General",
            WalletAmountBefore: 0,
            WalletAmountAfter: 0,
            Status: "Fail",
            Returns: 0
          }
        },
        Month: {
          _comment: "//Incorporate Every Week Details into Month"
        },
        Year: {
          _comment: "//Incorporate Every Month Details into Year"
        }
      },
      G2: {
        Transactions: {
          CurrentDay: [],
          Week: [],
          Month: [],
          Year: []
        }
      },
      G3: {
        Transactions: {
          CurrentDay: [],
          Week: [],
          Month: [],
          Year: []
        }
      },
      G4: {
        Transactions: {
          CurrentDay: [],
          Week: [],
          Month: [],
          Year: []
        }
      }
    },
    WorkSpaceInfo: {
      WorkSpaceId: "W1",
      WorkSpaceName: "Company",
      WorkSpaceCode: "WCompany@1",
      TotalMembers: [],
      RequestList: [
        {
          Name: "GroupId"
        },
        {
          Name: "GroupId"
        },
        {
          Name: "GroupId"
        }
      ]
    }
  }
};
const WorkSpaceList = JSON.stringify(WorkSpaceListJson);
export default WorkSpaceList;
