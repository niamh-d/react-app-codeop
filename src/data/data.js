const starterToDosArr = [
  {
    id: "001",
    title: "Clean Kitchen",
    status: "new",
    repeated: true,
    frequency: "daily",
    addDate: "Jan 20 2024",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["household"]
  },
  {
    id: "002",
    title: "React assignment",
    status: "completed",
    repeated: false,
    frequency: null,
    addDate: "Jan 22 2024",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["programming", "study"]
  },
  {
    id: "003",
    title: "Grocery shopping",
    status: "new",
    repeated: true,
    frequency: "weekly",
    addDate: "Mar 06 2023",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["household"]
  },
  {
    id: "004",
    title: "Write in journal",
    status: "new",
    repeated: true,
    frequency: "daily",
    addDate: "Nov 22 2023",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["wellbeing", "writing"]
  },
  {
    id: "005",
    title: "Meditate",
    status: "new",
    repeated: true,
    frequency: "daily",
    addDate: "Nov 22 2023",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["wellbeing"]
  },
  {
    id: "006",
    title: "Stretch",
    status: "new",
    repeated: true,
    frequency: "daily",
    addDate: "Nov 22 2023",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["wellbeing", "exercise"]
  },
  {
    id: "009",
    title: "German lesson",
    status: "new",
    repeated: true,
    frequency: "daily",
    addDate: "13 Dec 2023",
    deadlineDate: null,
    isArchived: false,
    completionDate: null,
    archivedDate: null,
    tags: ["study"]
  }
];

const starterArchivedToDosArr = [
  {
    id: "007",
    title: "Buy train tickets",
    status: "new",
    repeated: false,
    frequency: null,
    addDate: "Jan 02 2024",
    deadlineDate: null,
    isArchived: true,
    completionDate: "Jan 23 2024",
    archivedDate: "Jan 24 2024",
    tags: ["travel"]
  },
  {
    id: "008",
    title: "Buy gift for Sophia",
    status: "new",
    repeated: false,
    frequency: null,
    addDate: "Jan 02 2024",
    deadlineDate: null,
    isArchived: false,
    completionDate: "Jan 10 2024",
    archivedDate: "Jan 12 2024",
    tags: ["birthdays"]
  }
];

const starterHistoricStats = {
  numCompleted: 3,
  numArchived: 2,
  numDeleted: 0,
  numAdded: 9,
  numRestored: 0
};

const starterUser = {
  firstName: "Niamh",
  avatar: "https://i.pravatar.cc/100?u=ac"
};

export const data = {
  starterUser,
  starterHistoricStats,
  starterToDosArr,
  starterArchivedToDosArr
};

// https://i.pravatar.cc/400?u=6s
