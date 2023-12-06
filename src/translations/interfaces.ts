export interface Word {
  header: {
    home: string;
    addUser: string;
    usersList: string;
  };
  layout: {
    home: {
      title: string;
      title2: string;
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
    updateUser: {
      title: string;
      title2: string;
      goBack: string;
      name: string;
      email: string;
      password: string;
      age: string;
      employee: string;
      send: string;
    };
    userList: {
      title: string;
      title2: string;
      goBack: string;
      noOne: string;
      name: string;
      email: string;
      password: string;
      age: string;
      employee: string;
      yes: string;
      no: string;
      update: string;
      delete: string;
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
      title: "layout.home.title",
      title2: "layout.home.title2",
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
    },
    updateUser: {
      title: "layout.updateUser.title",
      title2: "layout.updateUser.title2",
      goBack: "layout.updateUser.goBack",
      name: "layout.updateUser.name",
      email: "layout.updateUser.email",
      password: "layout.updateUser.password",
      age: "layout.updateUser.age",
      employee: "layout.updateUser.employee",
      send: "layout.updateUser.send",
    },
    userList: {
      title: "layout.userList.title",
      title2: "layout.userList.title2",
      goBack: "layout.userList.goBack",
      noOne: "layout.userList.noOne",
      name: "layout.userList.name",
      email: "layout.userList.email",
      password: "layout.userList.password",
      age: "layout.userList.age",
      employee: "layout.userList.employee",
      yes: "layout.userList.yes",
      no: "layout.userList.no",
      update: "layout.userList.update",
      delete: "layout.userList.delete",
    },
  },
};

