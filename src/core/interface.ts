interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
};

interface NEW_ID {
  type: "NEW_ID";
  payload: number;
};

interface DELETE_USER {
  type: "DELETE_USER";
  payload: number | undefined;
};

interface UPDATE_USER {
  type: "UPDATE_USER";
  payload: Users;
};

interface ADD_USER {
  type: "ADD_USER";
  payload: Users;
};

export type All_Actions = UPDATE_THEME | DELETE_USER | ADD_USER | UPDATE_USER | NEW_ID;

//
export interface Users {
     id?: number;
     name?: string;
     email?: string;
     password?: string;
     age?: number | null;
     employee?: boolean;
};

//
export interface State {
  theme: string;
  newID: number;
  users: Users[];
};

//
export const initialState: State = {
  theme: "dark",
  newID: 7,
  users: [
    {
      id: 1,
      name: "Fran",
      email: "fran@mail.com",
      password: "fran123franx",
      age: 22,
      employee: true,
    },
    {
      id: 2,
      name: "María",
      email: "maria@mail.com",
      password: "maria123xzara",
      age: 25,
      employee: true,
    },
    {
      id: 3,
      name: "Gigi",
      email: "gigi@mail.com",
      password: "gigi123lolo",
      age: 16,
      employee: false,
    },
    {
      id: 4,
      name: "Leo",
      email: "leo@mail.com",
      password: "leonardo123x",
      age: 28,
      employee: true,
    },
    {
      id: 5,
      name: "Sandro",
      email: "sandro@mail.com",
      password: "sandro123xzara",
      age: 35,
      employee: true,
    },
    {
      id: 6,
      name: "Tomás",
      email: "tomas@mail.com",
      password: "toMAs123lolo",
      age: 18,
      employee: false,
    },
  ],
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
  updateID: () => void;
  deleteOne: (id: number | undefined) => void;
  addOne: (user: Users) => void;
  updateUser: (user: Users) => void;
  capitalizing: (str: string) => string;
};
