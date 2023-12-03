interface Word {
  header: {
    home: string;
    addUser: string;
    usersList: string;
  };
  layout: {
    pages: string;
    addUser: string;
    showUsers: string;
  };
};

export const wordsPage: Word = {
  header: {
    home: "header.home",
    addUser: "header.addUser",
    usersList: "header.usersList",
  },
  layout: {
    pages: "layout.pages",
    addUser: "layout.addUser",
    showUsers: "layout.showUsers",
  },
};

