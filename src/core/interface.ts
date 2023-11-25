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

interface ADD_USER {
  type: "ADD_USER";
  payload: Users;
};

export type All_Actions = UPDATE_THEME | DELETE_USER | ADD_USER | NEW_ID;

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
  theme: "light",
  newID: 4,
  users: [
    {
      id: 1,
      name: "Fran",
      email: "fran@mail.com",
      password: "fran123",
      age: 22,
      employee: true,
    },
    {
      id: 2,
      name: "María",
      email: "maria@mail.com",
      password: "maria123",
      age: 25,
      employee: true,
    },
    {
      id: 3,
      name: "Gigi",
      email: "gigi@mail.com",
      password: "gigi123",
      age: 16,
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
};
