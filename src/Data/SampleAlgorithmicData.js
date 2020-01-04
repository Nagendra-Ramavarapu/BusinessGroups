const SampleAlgorithmicData = {
    Parent: {
      ParentConfig: {},
      hasChild: true,
      childsCount: 3,
      name: "parent",
      childGroups: [
        {
          ParentConfig: {},
          hasChild: true,
          childsCount: 2,
          name: "P: child1",
          childGroups: [
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild1: child1",
              childsCount: 0
            },
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild1: child2",
              childsCount: 0
            }
          ]
        },
        {
          ParentConfig: {},
          hasChild: true,
          childsCount: 3,
          name: "P: child2",
          childGroups: [
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild2: child1",
              childsCount: 0
            },
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild2: child2",
              childsCount: 0
            },
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild2: child3",
              childsCount: 0
            }
          ]
        },
        {
          ParentConfig: {},
          hasChild: true,
          childsCount: 1,
          name: "P: child3",
          childGroups: [
            {
              ParentConfig: {},
              hasChild: false,
              name: "Pchild3: child1",
              childsCount: 0
            }
          ]
        }
      ]
    }
  };