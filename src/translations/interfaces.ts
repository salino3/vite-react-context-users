export interface Word {
  header: {
    home: string;
    addUser: string;
    usersList: string;
  };
  layout: {
    home: {
      pages: string;
      addUser: string;
      showUsers: string;
    };
    addUser: {
      title: string;
      title2: string;
      goBack: string;
      goList: string;
      name: string;
      email: string;
      password: string;
      age: string;
      employee: string;
      send: string;
    };
  };
};

export const wordsPage: Word = {
  header: {
    home: "header.home",
    addUser: "header.addUser",
    usersList: "header.usersList",
  },
  layout: {
     home: {
    pages: "layout.home.pages",
    addUser: "layout.home.addUser",
    showUsers: "layout.home.showUsers",
    },
   addUser: {
    title: "layout.addUser.title",
    title2: "layout.addUser.title2",
    goBack: "layout.addUser.goBack",
    goList: "layout.addUser.goList",
    name: "layout.addUser.name",
    email: "layout.addUser.email",
    password: "layout.addUser.password",
    age: "layout.addUser.age",
    employee: "layout.addUser.employee",
    send: "layout.addUser.send",
   } 
  },
  
};

